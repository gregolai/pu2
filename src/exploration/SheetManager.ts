import { CSSParsedObj } from './parseCSS';

interface StyleSheetWithInsertRule extends StyleSheet {
	addRule: (selector: string, rules: string, index: number) => void;
	insertRule: (selectorWithRules: string, index: number) => void;

	deleteRule: (index: number) => void;
}

let _nextSheetId = 1;

class ManagedSheet {
	_nextIndex: number;
	_selectorToIndex: Mapped<number>;
	_indexToChecksum: Mapped<number>;
	_element: HTMLStyleElement;
	_sheet: StyleSheetWithInsertRule;

	constructor(media?: string) {
		this._nextIndex = 0;
		this._selectorToIndex = {};
		this._indexToChecksum = {};

		this._element = document.createElement('style');
		this._element.setAttribute('sheet-id', `${_nextSheetId++}`);

		if (media) {
			const mediaMatch = media.split('@media ')[1];
			this._element.setAttribute('media', mediaMatch);
		}

		this._insertStyleElement(this._element);

		this._sheet = this._element.sheet as StyleSheetWithInsertRule;
	}

	_insertStyleElement(el) {
		const head = document.head;

		const lastSheet = head.querySelector('style[sheet-id]:last-child');
		if (lastSheet) {
			// Insert after last managed <style> tag
			lastSheet.after(el);

			return;
		}

		// Attempt to get first non-managed <style> or <link> tag
		const firstNonSheet = head.querySelector('style:not([sheet-id]),link[rel="stylesheet"]');

		if (firstNonSheet) {
			// Insert before non-managed <style> or <link> tag
			head.insertBefore(el, firstNonSheet);
		} else {
			// Edge case - no styles or links found. Just insert it at the end
			head.appendChild(el);
		}
	}

	// https://davidwalsh.name/add-rules-stylesheets
	addOrUpdateObj(obj: CSSParsedObj) {
		const { checksum, children, className, rulesStr } = obj;

		const selector = `.${className}`;

		let index = this._selectorToIndex[selector];
		if (index === undefined) {
			index = this._nextIndex++;
			this._selectorToIndex[selector] = index;
		} else {
			if (this._indexToChecksum[index] === checksum) {
				return;
			}

			if (!__DEV__) {
				// Delete rule so it can be immediately updated
				this._sheet.deleteRule(index);
			}
		}

		if (__DEV__) {
			// Allow stylesheets to be modified inline in Chrome
			const lines = this._element.innerText.split('/**/');
			lines[index] = `${selector}{${rulesStr}}`;
			this._element.innerText = lines.join('/**/');
		} else {
			this._sheet.insertRule(`${selector}{${rulesStr}}`, index);
		}

		this._indexToChecksum[index] = checksum;

		for (const key in children) {
			this.addOrUpdateObj(children[key]);
		}
	}
}

export default class SheetManager {
	_sheet: ManagedSheet;
	_mediaSheets: Mapped<ManagedSheet>;

	constructor() {
		this._sheet = new ManagedSheet();
		this._mediaSheets = {};
	}

	addOrUpdateObj(obj: CSSParsedObj, mediaKey?: string) {
		const { medias } = obj;

		let sheet;
		if (mediaKey) {
			// E.g. sheet['@media print']
			sheet = this._mediaSheets[mediaKey];
			if (!sheet) {
				sheet = this._mediaSheets[mediaKey] = new ManagedSheet(mediaKey);
			}
		} else {
			sheet = this._sheet;
		}

		sheet.addOrUpdateObj(obj);

		for (const mkey in medias) {
			this.addOrUpdateObj(medias[mkey], mkey);
		}
	}
}
