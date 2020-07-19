import kebabCase from 'lodash/kebabCase';
import createCache from '../createCache';
import shorthands from './shorthands';

// Hash string back-to-front
// https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
const hashString = (str: string) => {
	let hash = 0;
	for (let i = str.length - 1; i >= 0; --i) {
		hash = (hash << 5) - hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
	}

	return hash;
};

export interface CSSObject {
	[key: string]: false | string | number | CSSObject;
}

interface CSSParsedRule {
	hash: number;
	str: string;
}

type RuleValue = string | number;

export interface CSSParsedObj {
	checksum: number;
	className: string;
	children: Mapped<CSSParsedObj>;
	medias: Mapped<CSSParsedObj>;
	rulesStr: string;
}

interface Acc {
	checksum: number;
}

const ruleCache = createCache<string, CSSParsedRule>();
const objCache = createCache<string, CSSParsedObj>();

const unsupportedRuleKeys = new Set<string>();

const getOrSetRule = (name: string, value: RuleValue) => {
	const key = `${name}_${value}`;

	if (unsupportedRuleKeys.has(key)) return null;

	let rule = ruleCache.get(key);
	if (!rule) {
		let cssName = kebabCase(name);
		if (cssName.startsWith('webkit-') || cssName.startsWith('moz-') || cssName.startsWith('ms-')) {
			cssName = `-${cssName}`;
		}

		const cssValue = `${value}`;
		if (!CSS.supports(cssName, cssValue)) {
			unsupportedRuleKeys.add(key);

			return null;
		}

		rule = {
			hash: hashString(key),
			str: `${cssName}:${value};`
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

const recurse = (css: CSSObject, acc: Acc, selector: string): CSSParsedObj => {
	const children: Mapped<CSSParsedObj> = {};
	const medias: Mapped<CSSParsedObj> = {};
	let rulesStr = '';

	for (const key in css) {
		const value = css[key];

		// Prevent falsy values from being parsed, but allow 0
		if (!value && value !== 0) continue;

		switch (key[0]) {
			case '.': // HAS CLASS
			case '[': // HAS ATTR
			case ' ': // CHILD
			case '>': // IMMEDIATE CHILD
			case ':': // PSEUDO
				acc.checksum ^= hashString(key);
				children[key] = recurse(css[key] as CSSObject, acc, `${selector}${key}`);
				break;
			case '@': // @media
				acc.checksum ^= hashString(key);
				medias[key] = recurse(css[key] as CSSObject, acc, selector);
				break;
			default:
				const { ruleNames, resolvedValue } = resolveShorthand(key, value as RuleValue);

				for (let i = 0, ii = ruleNames.length; i < ii; ++i) {
					const rule = getOrSetRule(ruleNames[i], resolvedValue);
					if (!rule) continue;

					acc.checksum ^= rule.hash;
					rulesStr += rule.str;
				}
		}
	}

	return {
		checksum: acc.checksum,
		children,
		medias,
		className: selector,
		rulesStr
	};
};

const getNextClassName = (() => {
	let state = 0;

	return () => `g-${(++state).toString(32)}`;
})();

export const createParsed = (css: CSSObject, prevParsed?: CSSParsedObj) => {
	const nextParsed = recurse(
		css,
		{
			checksum: 0
		},
		prevParsed ? prevParsed.className : getNextClassName()
	);

	// TODO: CLEAN ME UP!
	// Solves issue where props would change, but not generate a new className
	if (prevParsed && prevParsed.checksum !== nextParsed.checksum) {
		nextParsed.className = getNextClassName();
		// return prevParsed;
	}

	const key = `${nextParsed.checksum}`;
	let obj = objCache.get(key); // Preserves original selector
	if (!obj) {
		obj = nextParsed;
		objCache.set(key, obj);
	}

	return obj;
};
