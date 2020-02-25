import kebabCase from 'lodash/kebabCase';

const getNextId = (() => {
	let _id = 0;
	return () => ++_id;
})();

const getNextClassName = (() => {
	let state = 1;

	/* The state word must be initialized to non-zero */
	const xorshift32 = () => {
		/* Algorithm "xor" from p. 4 of Marsaglia, "Xorshift RNGs" */
		let x = state;
		x ^= x << 13;
		x ^= x >> 17;
		x ^= x << 5;
		return (state = x);
	};

	const basic = () => (state = state + 1);

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

interface CSSObject {
	[key: string]: string | number | CSSObject;
}

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

const hashString = str => {
	let hash = 0;
	for (let i = str.length - 1; i >= 0; --i) {
		hash ^= charHash(str.charCodeAt(i));
	}
	return hash;
};

interface CSSLine {
	str: string;
	hash: number;
}

type PropValue = string | number;
type PropMap = { [key: string]: PropValue };

interface CSSParsed {
	id: number;
	children: CSSParsed[];
	childrenByKey: { [key: string]: CSSParsed };
	className: string;
	str: string;
	//lines: CSSLine[];
	checksum: number;
	props: PropMap;
	parent?: CSSParsed;
}

const cachedCSSParsed = new Map<number, CSSParsed>();

export const createParsed = (obj: CSSObject, recursive?: { parent: CSSParsed; subKey: string }) => {
	const deferred: [string, CSSObject][] = [];

	const props: PropMap = {};
	const lineStrs: string[] = [];
	const lineHashes: number[] = [];

	let checksum = 0;
	for (let key in obj) {
		const value = obj[key];

		switch (key[0]) {
			case '.': // HAS CLASS
			case '[': // HAS ATTR
			case ' ': // CHILD
			case '>': // IMMEDIATE CHILD
			case ':': // PSEUDO
				deferred.push([key, value as CSSObject]);
				break;
			default:
				// NORMAL PROP
				if (__DEV__) {
					console.assert(typeof value === 'string' || typeof value === 'number');
				}

				// Check if "p" or "ml", etc
				const propNames = SHORTHANDS[key] || [key];

				for (let i = 0, ii = propNames.length; i < ii; ++i) {
					const propName = propNames[i];
					props[propName] = value as PropValue;

					const str = `${kebabCase(propName)}:${value};`;
					const hash = hashString(str);

					checksum ^= hash;

					lineStrs.push(str);
					lineHashes.push(hash);
				}

				break;
		}
	}

	let parsed = cachedCSSParsed.get(checksum);
	if (!parsed) {
		const { parent, subKey } = recursive || {};
		parsed = {
			id: getNextId(),
			children: [],
			childrenByKey: {},
			className: parent ? `${parent.className}${subKey}` : getNextClassName(),
			str: lineStrs.join(''),
			props,
			checksum,
			parent
		};
		cachedCSSParsed.set(checksum, parsed);
	}

	// PROCESS DEFERRED OBJECTS
	for (let i = 0, ii = deferred.length; i < ii; ++i) {
		const [subKey, obj] = deferred[i];
		parsed.children.push(createParsed(obj, { parent: parsed, subKey }));
	}

	return parsed;
};

export const updateParsed = (parsed: CSSParsed, obj: CSSObject) => {
	const todoPropNames = { ...parsed.props };

	let checksum = 0;
	for (let key in obj) {
		const value = obj[key];

		let child = parsed.childrenByKey[key];
		if (child) {
			updateParsed(child, value as CSSObject);
		} else {
			switch (key[0]) {
				case '.': // HAS CLASS
				case '[': // HAS ATTR
				case ' ': // CHILD
				case '>': // IMMEDIATE CHILD
				case ':': // PSEUDO
					break;

				default:
					// NORMAL PROP

					// Check if "p" or "ml", etc
					const propNames = SHORTHANDS[key] || [key];

					for (let i = 0, ii = propNames.length; i < ii; ++i) {
						const propName = propNames[i];

						const existingProp = todoPropNames[propName];
						if (existingProp) {
							// OLD PROP - CHECK IF IT'S CHANGED

							if (existingProp !== value) {
								// IT HAS CHANGED
							}
						} else {
							// NEW PROP - ADD IT
						}
					}

					break;
			}
		}
	}
};

/*
// SELECTOR
span {
	background: blue;

	h1 {
		background: yellow;

		&:hover {
			background: blue
		}
	}

	// SUB-SELECTOR
	&:hover {
		background: green
	}
}
// SELECTOR
p {
	background: yellow;
}
*/

// const s = document.createElement('style');
// s.setAttribute('data-greg-style', 'true');

// s.innerText = 'span { background-color: blue; }';

// document.head.appendChild(s);

// setTimeout(() => {
// 	s.innerText = s.innerText + ' span { color: white; }';
// }, 500);
