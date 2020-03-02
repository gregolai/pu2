import kebabCase from 'lodash/kebabCase';
import createCache from './createCache';
import shorthands from './shorthands';

const getNextId = (() => {
	let _id = 0;
	return () => ++_id;
})();

const getNextClassName = (() => {
	let state = 0;
	return () => `g-${(++state).toString(32)}`;
})();

const createPool = <T>(initSize: number, createFn: () => T) => {
	const _pooled: T[] = [];
	for (let i = 0; i < initSize; ++i) {
		_pooled.push(createFn());
	}

	const alloc = () => (_pooled.length === 0 ? createFn() : _pooled.pop());

	const free = (item: T) => {
		if (__DEV__) {
			console.assert(_pooled.indexOf(item) === -1);
		}
		_pooled.push(item);
	};

	return {
		alloc,
		free
	};
};

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
	id: number;
	children: Mapped<CSSParsed>;
	className: string;
	str: string;
	checksum: number;
	props: Mapped<CSSParsedProp>;
}

const PROP_CACHE_MAX = 2048;
const propCache = createCache<CSSParsedProp>(PROP_CACHE_MAX);

const getOrSetProp = (propName: string, value: PropValue) => {
	const cacheKey = `${propName}_${value}`;
	const prop = propCache.get(cacheKey);
	return (
		prop ||
		propCache.set(cacheKey, {
			hash: hashString(cacheKey),
			str: `${kebabCase(propName)}:${value};`,
			propName,
			value
		})
	);
};

const resolveShorthand = (propName: string, value: PropValue) => {
	const sh = shorthands[propName];
	return {
		propNames: sh ? sh.propNames : [propName],
		resolvedValue: sh && typeof value !== 'string' ? `${value}${sh.append}` : value
	};
};

const createOrUpdateParsed = (css: CSSObject, parsed?: CSSParsed, className?: string) => {
	if (!className) {
		className = parsed ? parsed.className : getNextClassName();
	}
	const props = parsed ? { ...parsed.props } : {};
	const children = parsed ? { ...parsed.children } : {};
	const unusedProps = parsed ? { ...parsed.props } : null;
	const unusedChildren = parsed ? { ...parsed.children } : null;

	let str = '';
	let checksum = 0;

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
				const child = children[key];
				if (child) {
					delete unusedChildren[key];
				}
				children[key] = createOrUpdateParsed(value as CSSObject, child, `${className}${key}`);
				break;
			default:
				const { propNames, resolvedValue } = resolveShorthand(key, value as PropValue);

				for (let i = 0, ii = propNames.length; i < ii; ++i) {
					const propName = propNames[i];

					let prop = props[propName];
					if (prop) {
						delete unusedProps[propName];
					}

					prop = props[propName] = getOrSetProp(propName, resolvedValue);
					checksum ^= prop.hash;
					str += prop.str;
				}

				break;
		}
	}

	if (parsed) {
		if (checksum !== parsed.checksum) {
			for (const propName in unusedProps) {
				delete props[propName];
			}
			parsed.checksum = checksum;
			parsed.str = str;
		} else if (__DEV__) {
			// If checksums are equal, then [arsed string
			// should equal updated string
			console.assert(parsed.str === str);
		}

		for (const selector in unusedChildren) {
			delete children[selector];
		}

		return parsed;
	}

	return {
		id: getNextId(),
		children,
		className,
		str,
		props,
		checksum
	};
};

export const createParsed = (css: CSSObject) => createOrUpdateParsed(css);
export const updateParsed = (parsed: CSSParsed, css: CSSObject) => createOrUpdateParsed(css, parsed);
