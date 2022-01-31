import React, { createContext, useCallback, useRef } from 'react';
import { Handler } from './Handler';
import { createParser, CSSInput, ParsedCSS } from './parser';

interface Props {
	children: React.ReactNode;
	handler: Handler;
	parser: ReturnType<typeof createParser>;
}

interface ContextType {
	add: (p: ParsedCSS) => void;
	parse: (input: CSSInput) => ParsedCSS;
}

export const StyleContext = createContext<ContextType | null>(null);

export const InternalStyleProvider = ({ children, handler, parser }: Props) => {
	const seen = useRef(new Set<string>());

	const add = useCallback((p: ParsedCSS) => {
		if (!seen.current.has(p.className)) {
			handler.add(p);
			seen.current.add(p.className);
		}
	}, []);

	const parse = useCallback((input: CSSInput) => {
		return parser.parse(input);
	}, []);

	return <StyleContext.Provider value={{ add, parse }}>{children}</StyleContext.Provider>;
};
