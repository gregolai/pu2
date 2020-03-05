import { CSSParsedObj } from './parseCSS';

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
	_sheet: ManagedStyleSheet;

	constructor(classPrefix: string) {
		this._nextIndex = 0;
		this._classPrefix = classPrefix;
		this._selectorToIndex = {};
		this._indexToChecksum = {};

		const s = document.createElement('style');
		document.head.appendChild(s);
		this._sheet = s.sheet as ManagedStyleSheet;
	}

	// https://davidwalsh.name/add-rules-stylesheets
	addOrUpdateObj(obj: CSSParsedObj) {
		const { checksum, children, className, rules } = obj;

		const selector = `.${className}`;
		const rulesStr = getRulesStr(rules);

		let index = this._selectorToIndex[selector];
		if (index === undefined) {
			index = this._nextIndex++;
			this._selectorToIndex[selector] = index;
		} else {
			if (this._indexToChecksum[index] === checksum) {
				return;
			}
			// Delete rule so it can be immediately updated
			this._sheet.deleteRule(index);
		}

		this._sheet.insertRule(`${selector}{${rulesStr}}`, index);

		this._indexToChecksum[index] = checksum;

		for (const key in children) {
			this.addOrUpdateObj(children[key]);
		}
	}
}
