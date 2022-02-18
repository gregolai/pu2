import React, { useRef } from 'react';
import { SSRStyleCollector } from './SSRStyleCollector';
import { InternalStyleProvider } from '../internal/StyleProvider';
import { createParser } from '../internal/parser';

type ParserType = ReturnType<typeof createParser>;

interface Props {
	children: React.ReactNode;
	collector: SSRStyleCollector;
}

export const SSRStyleProvider = ({ children, collector }: Props) => {
	const parser = useRef<ParserType | null>(null);
	if (parser.current === null) {
		parser.current = createParser((i) => `g-${i}`);
	}
	return (
		<InternalStyleProvider handler={collector} parser={parser.current}>
			{children}
		</InternalStyleProvider>
	);
};
