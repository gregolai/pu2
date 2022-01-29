import React, { forwardRef } from 'react';
import { cx, CxClassName } from './cx';
import { AllStyleProps, allPropsSet } from './style-lib/AllStyleProps';
import { CSSInput } from './style-lib/parser';
import { useCSS } from './style-lib/useCSS';

type PartialProps<T> = {
	[P in keyof T]?: T[P] | false;
};

export type BoxProps = PartialProps<AllStyleProps> & {
	as?: AsComponent;
	className?: CxClassName;
	css?: CSSInput;
	ref?: React.Ref<HTMLElement>;
	[key: string]: any;
};

export const Box: React.FC<BoxProps> = forwardRef<HTMLElement, BoxProps>(
	({ as: Component = 'div', css: extraCSS, ...rest }, ref) => {
		/**
		 * Apply inline style props to CSS
		 * e.g. <Box backgroundColor="green" color="white">
		 */
		const css: CSSInput = {};
		for (const key in rest) {
			if (allPropsSet.has(key)) {
				css[key] = rest[key];
				delete rest[key];
			}
		}

		/**
		 * Apply CSS on top
		 */
		Object.assign(css, extraCSS);

		return <Component ref={ref} {...rest} className={cx(useCSS(css), rest.className)} />;
	}
);
