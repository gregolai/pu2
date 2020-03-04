import createCache, { Cache } from './createCache';
import { CSSParsed } from './parseCSS';

interface ManagedStyleSheet extends StyleSheet {
	addRule: (selector: string, rules: string, index: number) => void;
	insertRule: (selectorWithRules: string, index: number) => void;

	deleteRule: (index: number) => void;
}

const getRulesStr = rules => rules.reduce((str, r) => str + r.str, '');

export default class StyleManager {
	_nextIndex: number;
	_classPrefix: string;
	_selectorToIndex: Mapped<number>;
	_indexToChecksum: Mapped<number>;
	_styleElement: HTMLStyleElement;
	_sheet: ManagedStyleSheet;

	constructor(classPrefix: string) {
		this._nextIndex = 0;
		this._classPrefix = classPrefix;
		this._selectorToIndex = {};
		this._indexToChecksum = {};
		this._styleElement = document.createElement('style');

		document.head.appendChild(this._styleElement);

		this._sheet = this._styleElement.sheet as ManagedStyleSheet;
	}

	// https://davidwalsh.name/add-rules-stylesheets
	_addCSSRule = (selector: string, rules: string, index: number) => {
		this._sheet.insertRule(`${selector}{${rules}}`, index);
	};

	addOrUpdateObj(obj: CSSParsed) {
		const selector = `.${obj.selector}`;
		const rulesStr = getRulesStr(obj.rules);

		let index = this._selectorToIndex[selector];
		if (index === undefined) {
			index = this._nextIndex++;
			this._selectorToIndex[selector] = index;
			this._indexToChecksum[index] = obj.checksum;
		} else {
			if (this._indexToChecksum[index] === obj.checksum) {
				return;
			}
			this._indexToChecksum[index] = obj.checksum;
			this._sheet.deleteRule(index);
		}
		this._sheet.insertRule(`${selector}{${rulesStr}}`, index);
	}

	addOrUpdateSelector(selector: string, rulesStr: string) {
		let index = this._selectorToIndex[selector];
		if (index === undefined) {
			index = this._nextIndex++;
			this._selectorToIndex[selector] = index;
		} else {
			this._sheet.deleteRule(index);
		}
		this._sheet.insertRule(`${selector}{${rulesStr}}`, index);
	}
}
