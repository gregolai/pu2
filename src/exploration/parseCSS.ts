import kebabCase from 'lodash/kebabCase';
import createCache from './createCache';
import shorthands from './shorthands';

// xorshift 32-bit https://en.wikipedia.org/wiki/Xorshift
const charHash = (charCode: number) => {
	charCode ^= charCode << 13;
	charCode ^= charCode >> 17;
	charCode ^= charCode << 5;
	return charCode;
};

const hashString = (str: string) => {
	let hash = 0;
	for (let i = str.length - 1; i >= 0; --i) {
		hash ^= charHash(str.charCodeAt(i));
	}
	return hash;
};

interface CSSObject {
	[key: string]: string | number | CSSObject;
}

interface CSSParsedRule {
	hash: number;
	str: string;
	name: string;
	value: RuleValue;
}

type RuleValue = string | number;

export interface CSSParsedObj {
	checksum: number;
	className: string;
	children: Mapped<CSSParsedObj>;
	rules: CSSParsedRule[];
}

interface Acc {
	checksum: number;
}

const ruleCache = createCache<CSSParsedRule>();
const objCache = createCache<CSSParsedObj>();

const getOrSetRule = (name: string, value: RuleValue) => {
	const key = `${name}_${value}`;

	let rule = ruleCache.get(key);
	if (!rule) {
		rule = {
			hash: hashString(key),
			str: `${kebabCase(name)}:${value};`,
			name,
			value
		};
		ruleCache.set(key, rule);
	}

	return rule;
};

const resolveShorthand = (name: string, value: RuleValue) => {
	const sh = shorthands[name];

	return {
		ruleNames: sh ? sh.ruleNames : [name],
		resolvedValue: sh && typeof value !== 'string' ? `${value}${sh.append}` : value
	};
};

const recurse = (css: CSSObject, acc?: Acc, selector?: string) => {
	const children: Mapped<CSSParsedObj> = {};
	const rules: CSSParsedRule[] = [];

	for (const key in css) {
		const value = css[key];

		// Null and undefined values should not get parsed
		if (value === null || value === undefined) continue;

		switch (key[0]) {
			case '.': // HAS CLASS
			case '[': // HAS ATTR
			case ' ': // CHILD
			case '>': // IMMEDIATE CHILD
			case ':': // PSEUDO
				acc.checksum ^= hashString(key);
				children[key] = recurse(css[key] as CSSObject, acc, `${selector}${key}`);
				break;
			default:
				const { ruleNames, resolvedValue } = resolveShorthand(key, value as RuleValue);

				for (let i = 0, ii = ruleNames.length; i < ii; ++i) {
					const ruleName = ruleNames[i];

					const rule = getOrSetRule(ruleName, resolvedValue);
					acc.checksum ^= rule.hash;
					rules.push(rule);
				}
		}
	}

	return {
		checksum: acc.checksum,
		children,
		className: selector,
		rules
	} as CSSParsedObj;
};

const getNextClassName = (() => {
	let state = 0;
	return () => `g-${(++state).toString(32)}`;
})();

export const createParsed = (css: CSSObject, prevParsed: CSSParsedObj) => {
	const nextParsed = recurse(
		css,
		{
			checksum: 0
		},
		prevParsed ? prevParsed.className : getNextClassName()
	);

	const key = `${nextParsed.checksum}`;
	let obj = objCache.get(key); // Preserves original selector
	if (!obj) {
		obj = nextParsed;
		objCache.set(key, obj);
	}
	return obj;
};
