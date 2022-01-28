import React, { forwardRef, useRef } from 'react';
import { cx, CxClassName } from './cx';
import { CSSInput, parseCSS } from './exploration/parseCSS';
import { applyParsedCSS } from './exploration/applyParsedCSS';
import { AllProps, allPropsSet } from './exploration/allCSSProps';

type PartialProps<T> = {
	[P in keyof T]?: T[P] | false;
};

export type BoxProps = PartialProps<AllProps> & {
	as?: AsComponent;
	className?: CxClassName;
	css?: CSSInput;
	ref?: React.Ref<HTMLElement>;
	[key: string]: any;
};

export const Box: React.FC<BoxProps> = forwardRef<HTMLElement, BoxProps>(
	({ as: Component = 'div', css, ...rest }, ref) => {
		/**
		 * Apply inline style props to CSS
		 * e.g. <Box backgroundColor="green" color="white">
		 */
		const finalCSS: CSSInput = {};
		for (const key in rest) {
			if (allPropsSet.has(key)) {
				finalCSS[key] = rest[key];
				delete rest[key];
			}
		}

		/**
		 * Apply CSS on top
		 */
		Object.assign(finalCSS, css);

		const parsed = parseCSS(finalCSS as any);

		applyParsedCSS(parsed);

		return <Component ref={ref} {...rest} className={cx(parsed.className, rest.className)} />;
	}
);
