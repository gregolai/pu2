import { useContext, useRef } from 'react';
import { StyleSSRContext } from './StyleSSRProvider';
import { CSSInput, createParser } from './parser';
import { createStyleManager } from './style-maker';

const _isBrowser = (() => typeof window !== 'undefined' && this === window)();
const _seen = new Set<string>();
const _parser = createParser((i: number) => `b-${i}`);
const _styleManager = _isBrowser ? createStyleManager() : null;

export const useCSS = (input: CSSInput) => {
	const seen = useRef(_seen);
	const collect = useContext(StyleSSRContext);
	const p = _parser.parse(input);
	if (!seen.current.has(p.className)) {
		_styleManager ? _styleManager.add(p) : collect(p);
		seen.current.add(p.className);
	}
	return p.className;
};
