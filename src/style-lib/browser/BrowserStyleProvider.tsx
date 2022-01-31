import React, { useRef } from 'react';
import { BrowserHandler } from '../internal/BrowserHandler';
import { InternalStyleProvider } from '../internal/StyleProvider';
import { createParser } from '../internal/parser';

interface Props {
	children: React.ReactNode;
}

export const BrowserStyleProvider = ({ children }: Props) => {
	const handler = useRef(new BrowserHandler());
	const parser = useRef(createParser((i) => `g-${i}`));
	return (
		<InternalStyleProvider handler={handler.current} parser={parser.current}>
			{children}
		</InternalStyleProvider>
	);
};
