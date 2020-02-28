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

	addRule() {
		// TODO
	}
}
