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

interface CSSParsedProp {
	hash: number;
	propName: string;
	value: PropValue;
	str: string;
}

type PropValue = string | number;

export interface CSSParsed {
	checksum: number;
	children: Mapped<CSSParsed>;
	selector: string;
	rules: CSSParsedProp[];
}

const propCache = createCache<CSSParsedProp>();
const objCache = createCache<CSSParsed>();

const getOrSetProp = (propName: string, value: PropValue) => {
	const key = `${propName}_${value}`;

	let prop = propCache.get(key);
	if (!prop) {
		prop = {
			hash: hashString(key),
			str: `${kebabCase(propName)}:${value};`,
			propName,
			value
		};
		propCache.set(key, prop);
	}

	return prop;
};

const resolveShorthand = (propName: string, value: PropValue) => {
	const sh = shorthands[propName];

	return {
		propNames: sh ? sh.propNames : [propName],
		resolvedValue: sh && typeof value !== 'string' ? `${value}${sh.append}` : value
	};
};

const recurse = (css: CSSObject, acc?: { checksum: number }, selector?: string) => {
	const children: Mapped<CSSParsed> = {};
	const rules: CSSParsedProp[] = [];

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
				const { propNames, resolvedValue } = resolveShorthand(key, value as PropValue);

				for (let i = 0, ii = propNames.length; i < ii; ++i) {
					const propName = propNames[i];

					const rule = getOrSetProp(propName, resolvedValue);
					acc.checksum ^= rule.hash;
					rules.push(rule);
				}
		}
	}

	return {
		checksum: acc.checksum,
		children,
		selector,
		rules
	} as CSSParsed;
};

const getNextClassName = (() => {
	let state = 0;
	return () => `g-${(++state).toString(32)}`;
})();

export const createParsed = (css: CSSObject, prevParsed: CSSParsed) => {
	const nextParsed = recurse(
		css,
		{
			checksum: 0
		},
		prevParsed ? prevParsed.selector : getNextClassName()
	);

	const key = `${nextParsed.checksum}`;
	let obj = objCache.get(key);
	if (!obj) {
		obj = nextParsed;
		console.log({ obj });
		objCache.set(key, obj);
	}
	return obj;
};
