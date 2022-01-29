import React, { createContext } from 'react';
import { ParsedCSS } from './parser';

interface Props {
	children: React.ReactNode;
	collect: (p: ParsedCSS) => void;
}

export const StyleSSRContext = createContext((p: ParsedCSS) => {});

export const StyleSSRProvider = ({ children, collect }: Props) => {
	return <StyleSSRContext.Provider value={collect}>{children}</StyleSSRContext.Provider>;
};
