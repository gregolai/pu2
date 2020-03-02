import { CSSParsed } from './parseCSS';

interface ManagedStyleSheet extends StyleSheet {
	addRule: (selector: string, rules: string, index: number) => void;
	insertRule: (selectorWithRules: string, index: number) => void;
}

export default class StyleManager {
	_styleElement: HTMLStyleElement;
	_sheet: ManagedStyleSheet;

	constructor() {
		this._styleElement = document.createElement('style');

		document.head.appendChild(this._styleElement);

		this._sheet = this._styleElement.sheet as ManagedStyleSheet;
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

	addParsedObj(parsedObj: CSSParsed) {
		let index = 0;
		const recurse = (parsed: CSSParsed) => {
			const selector = `.${parsed.className}`;
			const rule = parsed.str;
			this._addCSSRule(this._sheet, selector, rule, index++);

			for (let key in parsed.children) {
				recurse(parsed.children[key]);
			}
		};
		recurse(parsedObj);
	}
}
