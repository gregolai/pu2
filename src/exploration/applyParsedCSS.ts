import type { ParsedCSS, ParsedObj } from './parseCSS';

const getLastManagedSheet = () => {
	const s = document.head.querySelectorAll('style[sheet-id]');
	return s[s.length - 1];
};

const insertStyleEl = (el: HTMLStyleElement) => {
	const head = document.head;

	const lastSheet = getLastManagedSheet();
	if (lastSheet) {
		// Insert after last managed <style[sheet-id]> tag
		lastSheet.after(el);
		return;
	}

	// Attempt to get first non-managed <style> or <link> tag
	const firstNonManagedSheet = head.querySelector('style,link[rel="stylesheet"]');
	if (firstNonManagedSheet) {
		// Insert before non-managed <style> or <link> tag
		head.insertBefore(el, firstNonManagedSheet);
	} else {
		// Edge case - no styles or links found. Just insert it at the end
		head.appendChild(el);
	}
};

type ManagedSheet = ReturnType<typeof createSheet>;

const _seenClassNames = new Set<string>();
let _sheet: ManagedSheet;
let _mediaSheets: Mapped<ManagedSheet> = {};
let _nextSheetId = 1;

const createSheet = (mediaKey?: string) => {
	const _el = document.createElement('style');
	_el.setAttribute('sheet-id', `${_nextSheetId++}`);

	if (mediaKey) {
		_el.setAttribute('media', mediaKey);
	}

	insertStyleEl(_el);

	const _sheet = _el.sheet as CSSStyleSheet;

	return {
		addObj: (className: string, obj: ParsedObj) => {
			const sel = `.${className}${obj.sel}`;

			const sel_with_rules = `${sel}{${obj.rules.map((rule) => rule.str).join('')}}`;
			if (__DEV__) {
				let split = ` /**/    /**/ `;
				const lines = _el.innerText.split(split);
				lines.push(sel_with_rules);
				_el.innerText = lines.join(split);
			} else {
				_sheet.insertRule(sel_with_rules, _sheet.cssRules.length);
			}
		}
	};
};

const _getSheet = () => {
	return _sheet || (_sheet = createSheet());
};

const _getMediaSheet = (mediaKey: string) => {
	return _mediaSheets[mediaKey] || (_mediaSheets[mediaKey] = createSheet(mediaKey));
};

const _add = (className: string, objs: ParsedCSS['objs'], mediaKey?: string) => {
	const sheet = mediaKey ? _getMediaSheet(mediaKey) : _getSheet();
	for (let i = 0, ii = objs.length; i < ii; ++i) {
		sheet.addObj(className, objs[i]);
	}
};

export const applyParsedCSS = (obj: ParsedCSS) => {
	if (!_seenClassNames.has(obj.className)) {
		_add(obj.className, obj.objs);
		for (const mediaKey in obj.medias) {
			_add(obj.className, obj.medias[mediaKey], mediaKey);
		}
		_seenClassNames.add(obj.className);
	}
};