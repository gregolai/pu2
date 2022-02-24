import { ParsedCSS } from './parser';
import { createRuleStr } from './utils';
import { Handler } from './Handler';

export class BrowserHandler extends Handler {
	_nextSheetId = 1;
	_sheet: ManagedSheet | null = null;
	_mediaSheets: { [mediaQ: string]: ManagedSheet } = {};

	add(p: ParsedCSS) {
		// UNPURE CODE, BUT IT PREVENTS DOUBLE-ADDING CLASSNAMES
		// TODO: PURIFY!
		// @ts-ignore
		if (window['_ssr_i'] && p.i <= window['_ssr_i']) {
			return;
		}
		this._getSheet().add(p.className, p.objs);
		for (const mediaQ in p.medias) {
			this._getMediaSheet(mediaQ).add(p.className, p.medias[mediaQ]);
		}
	}

	_newSheet(mediaQ?: string) {
		return new ManagedSheet(this._nextSheetId++, mediaQ);
	}

	_getMediaSheet(mediaQ: string) {
		return this._mediaSheets[mediaQ] || (this._mediaSheets[mediaQ] = this._newSheet(mediaQ));
	}

	_getSheet() {
		return this._sheet || (this._sheet = this._newSheet());
	}
}

class ManagedSheet {
	_el: HTMLStyleElement;
	_sheet: CSSStyleSheet;
	_sheetId: number;

	constructor(sheetId: number, mediaQ?: string) {
		this._el = document.createElement('style');
		this._sheetId = sheetId;

		this._el.setAttribute('sheet-id', `${this._sheetId}`);
		if (mediaQ) {
			this._el.setAttribute('media', mediaQ);
		}

		this._insertStyleEl(this._el);

		this._sheet = this._el.sheet as CSSStyleSheet;
	}

	add(className: string, objs: ParsedCSS['objs']) {
		const n = objs.length;
		for (let i = 0; i < n; ++i) {
			this._add(className, objs[i]);
		}
	}

	_add(className: string, obj: ParsedCSS['objs'][0]) {
		const str = createRuleStr(className, obj);
		if (str) {
			if (__DEV__) {
				const delim = ` /**/    /**/ `;
				const lines = this._el.innerText.split(delim);
				lines.push(str);
				this._el.innerText = lines.join(delim);
			} else {
				this._sheet.insertRule(str, this._sheet.cssRules.length);
			}
		}
	}

	_insertStyleEl(el: HTMLStyleElement) {
		const lastManaged = document.head.querySelector(`style[sheet-id="${this._sheetId - 1}"]`);
		if (lastManaged) {
			// Insert after last managed <style[sheet-id]> tag
			lastManaged.after(el);
			return;
		}

		// This may need more thinking-out, or options, but inserting at the end
		// seems to make sense for now, as the generated/managed className may need to
		// override styles from a prior, unmanaged one
		document.head.appendChild(el);
	}
}
