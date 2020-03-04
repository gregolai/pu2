import kebabCase from 'lodash/kebabCase';
import createCache from './createCache';
import shorthands from './shorthands';

interface Rule {
	hash: number;
	name: string;
	value: string;
	str: string;
}

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

const propCache = createCache<any>();

const getOrCreateProp = (propName: string, value: any) => {
	const key = `${propName}_${value}`;
	const prop = propCache.get(key);

	return (prop ||
		propCache.set(key, {
			hash: hashString(key),
			str: `${kebabCase(propName)}:${value};`,
			propName,
			value
		})) as any;
};

// const append = Number(root.checksum).toString(32);

const recurse = (css, acc, selector) => {
	const children = {};
	const rules = [];

	for (let key in css) {
		// Null and undefined values should not get parsed
		if (css[key] === null || css[key] === undefined) continue;

		switch (key[0]) {
			case ':':
			case ' ':
				children[key] = recurse(css[key], acc, `${selector}${key}`);
				break;

			default:
				const ruleName = key;
				const ruleValue = css[ruleName];

				//const hash = getHash(propName, propValue);
				const rule = getOrCreateProp(ruleName, ruleValue);

				acc.checksum ^= rule.hash;
				rules.push(rule);
		}
	}

	return {
		checksum: acc.checksum,
		children,
		selector,
		rules
	};
};

// TODO: Full selectors should be cache keys
// EXAMPLE: {
//   '.g-1': { checksum, rules }
//   '.g-1:hover': { rules }
//   '.g-1 h1': { rules }
// }
// Checksum includes subselector rules. If any rules change in the root or subselectors, update the root
// checksum. Map checksum to root selector. Could also use checksum base-32 as selector suffix instead.

export const createParsed = css => {
	const parsed = recurse(
		css,
		{
			checksum: 0
		},
		'.g-1'
	);

	// TODO: StyleManager insert
	return parsed;
};

export const updateParsed = (css, prevParsed) => {
	const nextParsed = recurse(
		css,
		{
			checksum: 0
		},
		prevParsed.selector
	);

	// if (nextParsed.checksum !== prevParsed.checksum) {
	// 	// TODO
	// }
	return nextParsed;
};

interface ParsedChildObj {
	key: string;
	children: { [key: string]: ParsedChildObj };
	rules: Rule[];
}

interface ParsedObj {
	checksum: string;
	children: { [key: string]: ParsedChildObj };
	rules: Rule[];
}
