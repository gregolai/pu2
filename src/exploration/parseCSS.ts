import kebabCase from 'lodash/kebabCase';
import type { AllProps } from './allCSSProps';

export type CSSInput = Partial<AllProps> & {
	[key: string]: false | string | CSSInput;
};

interface Acc {
	hash: number;
	objs: ParsedObj[];
	medias: { [k: string]: ParsedObj[] };
}

export interface ParsedObj {
	sel: string;
	rules: RuleObj[];
}

export interface ParsedCSS extends Acc {
	className: string;
}

interface RuleObj {
	hash: number;
	str: string;
}

// Hash string back-to-front
// https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0
const hashStr = (s: string) => {
	let h = 0;
	for (let i = s.length - 1; i >= 0; --i) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
	return h;
};

const next_class = (() => {
	let state = 0;

	/**
	 * THIS CONSTANT IS EQUAL TO "ad", which gets blocked by adblock. Skip it.
	 */
	const SKIP_ADBLOCK = 333;

	return () => `a-${++state === SKIP_ADBLOCK ? ++state : state}`;
})();

const Rules = (() => {
	const ruleCache = new Map<string, RuleObj>();
	return {
		getOrSet: (name: string, value: string) => {
			const kv = `${name}|${value}`;

			let rule = ruleCache.get(kv);
			if (!rule) {
				let kebabName = kebabCase(name);
				if (
					kebabName.startsWith('webkit-') ||
					kebabName.startsWith('moz-') ||
					kebabName.startsWith('ms-')
				) {
					kebabName = `-${kebabName}`;
				}
				if (__DEV__ && typeof CSS === 'object') {
					console.assert(CSS.supports(kebabName, value));
				}
				rule = {
					hash: hashStr(kv),
					str: `${kebabName}:${value};`
				};
				ruleCache.set(kv, rule);
			}
			return rule;
		}
	};
})();

const shorthands: { [k: string]: string[] } = {
	bg: ['background'],
	b: ['border'],
	bt: ['borderTop'],
	br: ['borderRight'],
	bb: ['borderBottom'],
	bl: ['borderLeft'],
	bx: ['borderLeft', 'borderRight'],
	by: ['borderTop', 'borderBottom'],
	h: ['height'],
	m: ['margin'],
	mt: ['marginTop'],
	mr: ['marginRight'],
	mb: ['marginBottom'],
	ml: ['marginLeft'],
	my: ['marginTop', 'marginBottom'],
	mx: ['marginLeft', 'marginRight'],
	p: ['padding'],
	pt: ['paddingTop'],
	pr: ['paddingRight'],
	pb: ['paddingBottom'],
	pl: ['paddingLeft'],
	py: ['paddingTop', 'paddingBottom'],
	px: ['paddingLeft', 'paddingRight'],
	w: ['width']
};

const objCache = new Map<number, ParsedCSS>();

const recurse = (input: CSSInput, acc: Acc, sel: string, media_key?: string) => {
	const obj: ParsedObj = {
		rules: [],
		sel
	};

	let sel_hash = hashStr(sel) + 1;
	if (media_key) {
		if (!acc.medias[media_key]) acc.medias[media_key] = [];
		acc.medias[media_key].push(obj);
		sel_hash ^= hashStr(media_key);
	} else {
		acc.objs.push(obj);
	}

	for (const key in input) {
		const value = input[key];

		/**
		 * Guard against falsy values, empty strings, etc.
		 */
		if (!value) continue;

		switch (key[0]) {
			/**
			 * self className
			 * e.g. self_sel.bar
			 */
			case '.':
			/**
			 * self attribute
			 * e.g. self_sel[data-bar="foo"]
			 */
			case '[':
			/**
			 * self pseudo-selector
			 * e.g. self_sel:focus
			 */
			case ':':
			/**
			 * child selector
			 * e.g. self_sel .bar
			 */
			case ' ':
			/**
			 * immediate child selector
			 * e.g. self_sel > .bar
			 */
			case '>':
				if (typeof value !== 'object') continue;
				recurse(value, acc, `${sel}${key}`, media_key);
				break;
			/**
			 * media rules
			 * e.g. '@media screen and (max-width: 1000px)'
			 */
			case '@':
				if (typeof value !== 'object') continue;
				recurse(value, acc, sel, key.substring(7));
				break;
			default:
				if (typeof value !== 'string') continue;

				const ruleNames = shorthands[key] || [key];

				for (let i = 0, ii = ruleNames.length; i < ii; ++i) {
					const rule = Rules.getOrSet(ruleNames[i], value);
					acc.hash += Math.imul(sel_hash, rule.hash);
					obj.rules.push(rule);
				}
		}
	}
};

export const parseCSS = (input: CSSInput) => {
	const acc: Acc = {
		hash: 0,
		medias: {},
		objs: []
	};
	recurse(input, acc, '');

	let obj = objCache.get(acc.hash);
	if (!obj) {
		obj = {
			...acc,
			className: acc.hash !== 1 ? next_class() : ''
		};
		objCache.set(acc.hash, obj);
	}
	return obj;
};
