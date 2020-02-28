import kebabCase from 'lodash/kebabCase';
import createCache from './createCache';

const getNextId = (() => {
	let _id = 0;

	return () => ++_id;
})();

const getNextClassName = (() => {
	let state = 0;

	/* The state word must be initialized to non-zero */
	const xorshift32 = () => {
		/* Algorithm "xor" from p. 4 of Marsaglia, "Xorshift RNGs" */
		let x = state;
		x ^= x << 13;
		x ^= x >> 17;
		x ^= x << 5;

		return (state = x);
	};

	const basic = () => ++state;

	return () => `g-${basic().toString(32)}`;
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

// const styleElements = createPool(10, () => document.createElement('style'));

const SHORTHANDS: { [k: string]: string[] } = {
	m: ['margin'],
	ml: ['marginLeft'],
	mr: ['marginRight'],
	mt: ['marginTop'],
	mb: ['marginTop'],
	mx: ['marginLeft', 'marginRight'],
	my: ['marginTop', 'marginBottom'],
	bg: ['background']
};

const charHash = charCode => {
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

interface CSSParsed {
	id: number;
	children: Mapped<CSSParsed>;
	className: string;
	str: string;
	checksum: number;
	props: Mapped<CSSParsedProp>;
}

const propCache = createCache<CSSParsedProp>(Number.MAX_SAFE_INTEGER);

const getOrSetProp = (propName: string, value: PropValue) => {
	const cacheKey = `${propName}_${value}`;
	const prop = propCache.get(cacheKey);
	if (prop) return prop;

	const str = `${kebabCase(propName)}:${value};`;

	return propCache.set(cacheKey, {
		hash: hashString(str),
		str,
		propName,
		value
	});
};

const createOrUpdateParsed = (obj: CSSObject, parsed?: CSSParsed, className?: string) => {
	if (!className) {
		className = parsed ? parsed.className : getNextClassName();
	}
	const props = parsed ? parsed.props : {};
	const children = parsed ? parsed.children : {};
	const unusedProps = parsed ? { ...parsed.props } : null;
	const unusedChildren = parsed ? { ...parsed.children } : null;

	let str = '';
	let checksum = 0;

	for (const key in obj) {
		const value = obj[key];

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
				// Check if "p" or "ml", etc
				const propNames = SHORTHANDS[key] || [key];

				for (let i = 0, ii = propNames.length; i < ii; ++i) {
					const propName = propNames[i];

					let prop = props[propName];
					if (prop) {
						delete unusedProps[propName];
					}

					prop = props[propName] = getOrSetProp(propName, value as PropValue);
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

export const createParsed = (obj: CSSObject) => createOrUpdateParsed(obj);
export const updateParsed = (parsed: CSSParsed, obj: CSSObject) => createOrUpdateParsed(obj, parsed);
