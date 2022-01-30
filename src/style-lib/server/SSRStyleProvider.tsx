import React, { useRef } from 'react';
import { SSRStyleCollector } from './SSRStyleCollector';
import { InternalStyleProvider } from '../internal/StyleProvider';
import { createParser } from '../internal/parser';

interface Props {
	children: React.ReactNode;
	collector: SSRStyleCollector;
}

export const SSRStyleProvider = ({ children, collector }: Props) => {
	const parser = useRef(createParser((i) => `g-${i}`));
	return (
		<InternalStyleProvider handler={collector} parser={parser.current}>
			{children}
		</InternalStyleProvider>
	);
};
