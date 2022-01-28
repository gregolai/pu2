import { useContext, useRef } from 'react';
import { StyleSSRContext } from './StyleSSRProvider';
import { CSSInput, parseCSS } from './parseCSS';

const isBrowser = (() => typeof window !== 'undefined' && this === window)();

const _seen = new Set<string>();

export const useCSS = (input: CSSInput) => {
	const seen = useRef(_seen);
	const collect = useContext(StyleSSRContext);
	const p = parseCSS(input);

	if (!seen.current.has(p.className)) {
		isBrowser ? applyParsedCSS(p) : collect(p);
		seen.current.add(p.className);
	}
	return p.className;
};
