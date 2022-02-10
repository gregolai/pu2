import React, { DetailedHTMLFactory, forwardRef, ReactHTML } from 'react';
import { cx } from '../../cx';
import { useStyle } from './useStyle';
import { StyleProps, isStyleProp } from '../internal/style-props.generated';
import { CSSInput } from '../internal/parser';

type NativeProps<T extends React.ElementType> = T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T]
	: React.ComponentPropsWithoutRef<T>;

export type BoxProps<T extends React.ElementType> = NativeProps<T> &
	Partial<StyleProps> & {
		as?: T;
		className?: Parameters<typeof cx>[0];
		css?: CSSInput;
	};

/**
 * We have to write it this way to get correct prop inference when using "as".
 * Don't ask me why.
 */
function BoxInner<T extends React.ElementType = 'div'>(
	{ as, className, css, ...rest }: BoxProps<T>,
	ref: React.ForwardedRef<unknown>
) {
	/**
	 * Apply inline style props to CSS
	 * e.g. <Box backgroundColor="green" color="white">
	 */
	const cssAccum: CSSInput = {};
	for (const key in rest) {
		if (isStyleProp(key)) {
			// @ts-expect-error
			cssAccum[key] = rest[key];
			// @ts-expect-error
			delete rest[key];
		}
	}

	if (css) {
		/**
		 * Apply CSS on top
		 */
		Object.assign(cssAccum, css);
	}

	return React.createElement(as || 'div', {
		...rest,
		ref,
		className: cx(useStyle(cssAccum), className)
	});
}

export const Box = forwardRef(BoxInner) as typeof BoxInner;
