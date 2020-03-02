interface ManagedStyleSheet extends StyleSheet {
	addRule: (selector: string, rules: string, index: number) => void;
	insertRule: (selectorWithRules: string, index: number) => void;
}

class StyleManager {
	_sheet: ManagedStyleSheet;

	constructor() {
		const el = document.createElement('style');

		document.head.appendChild(el);

		this._sheet = el.sheet as ManagedStyleSheet;
	}

	// https://davidwalsh.name/add-rules-stylesheets
	_addCSSRule = (sheet: ManagedStyleSheet, selector: string, rules: string, index: number) => {
		if ('insertRule' in sheet) {
			sheet.insertRule(selector + '{' + rules + '}', index);
		} else if ('addRule' in sheet) {
			// @ts-ignore
			sheet.addRule(selector, rules, index);
		}
	};

	addRule() {
		// TODO
	}
}
