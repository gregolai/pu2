import kebabCase from 'lodash/kebabCase';
import { type StyleProps, shorthands } from './style-props.generated';

export type CSSInput = Partial<StyleProps> & {
	[key: string]: false | string | CSSInput;
};

export interface ParsedObj {
	sel: string;
	rules: RuleObj[];
}

export interface ParsedCSS {
	className: string;
	hash: number;
	objs: ParsedObj[];
	medias: { [k: string]: ParsedObj[] };
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

const recurse = (
	input: CSSInput,
	getRule: (name: string, value: string) => RuleObj,
	acc: ParsedCSS,
	sel = '',
	media_key = ''
) => {
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
				if (__DEV__) {
					console.assert(typeof value === 'object');
				}
				recurse(value as CSSInput, getRule, acc, `${sel}${key}`, media_key);
				break;
			/**
			 * media rules
			 * e.g. '@media screen and (max-width: 1000px)'
			 */
			case '@':
				if (__DEV__) {
					console.assert(typeof value === 'object');
				}
				recurse(value as CSSInput, getRule, acc, sel, key.substring(7));
				break;
			default:
				if (typeof value !== 'string') continue;

				const ruleNames = shorthands[key as keyof typeof shorthands] || [key];

				for (let i = 0, ii = ruleNames.length; i < ii; ++i) {
					const rule = getRule(ruleNames[i], value);
					acc.hash += Math.imul(sel_hash, rule.hash);
					obj.rules.push(rule);
				}
		}
	}

	return acc;
};

export const createParser = (getClassName: (i: number) => string) => {
	const nextI = (() => {
		/**
		 * THIS CONSTANT IS EQUAL TO "ad", which gets blocked by adblock. Skip it.
		 */
		const SKIP_ADBLOCK = 333;
		let i = 0;
		return () => (++i === SKIP_ADBLOCK ? ++i : i);
	})();

	const getRule = (name: string, value: string) => {
		const hash = Math.imul(hashStr(name), hashStr(value));
		let rule = rules.get(hash);
		if (!rule) {
			let kebabName = kebabCase(name);
			if (
				kebabName.startsWith('webkit-') ||
				kebabName.startsWith('moz-') ||
				kebabName.startsWith('ms-')
			) {
				kebabName = `-${kebabName}`;
			}
			rule = {
				hash,
				str: `${kebabName}:${value};`
			};
			rules.set(hash, rule);
		}
		return rule;
	};

	const cache = new Map<number, ParsedCSS>();
	const rules = new Map<number, RuleObj>();
	return {
		parse: (input: CSSInput) => {
			const acc = recurse(input, getRule, {
				className: '',
				hash: 0,
				medias: {},
				objs: []
			});
			let obj = cache.get(acc.hash);
			if (!obj) {
				obj = acc;
				obj.className = getClassName(nextI());
				cache.set(obj.hash, obj);
			}
			return obj;
		}
	};
};
