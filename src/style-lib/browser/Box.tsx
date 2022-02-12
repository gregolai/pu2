import React, { forwardRef } from 'react';
import { cx } from '../../cx';
import { useStyle } from './useStyle';
import { StyleProps, isStyleProp } from '../internal/style-props.generated';
import { CSSInput } from '../internal/parser';

export type BoxProps = Partial<StyleProps> & {
	as?: AsComponent;
	className?: Parameters<typeof cx>[0];
	css?: CSSInput;
	ref?: React.Ref<unknown>;
	[key: string]: any;
};

export const Box = forwardRef<unknown, BoxProps>(({ as: Component = 'div', css: extraCSS, ...rest }, ref) => {
	/**
	 * Apply inline style props to CSS
	 * e.g. <Box backgroundColor="green" color="white">
	 */
	const css: CSSInput = {};
	for (const key in rest) {
		if (isStyleProp(key)) {
			css[key] = rest[key];
			delete rest[key];
		}
	}

	/**
	 * Apply CSS on top
	 */
	Object.assign(css, extraCSS);

	return <Component ref={ref} {...rest} className={cx(useStyle(css), rest.className)} />;
});
