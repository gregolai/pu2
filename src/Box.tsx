import React, { forwardRef, useRef } from 'react';
import cx from './cx';
import { createParsed, CSSObject, CSSParsedObj } from './exploration/parseCSS';
import SheetManager from './exploration/SheetManager';
import { AllProps, allPropsSet } from './exploration/allCSSProps';

const manager = new SheetManager();

export interface BoxProps extends Partial<AllProps> {
	as?: React.ComponentType<any> | string;
	css?: CSSObject;
}

const Box = forwardRef<any, BoxProps>(({ as: Component = 'div', css = {}, ...rest }, ref) => {
	const prev = useRef<CSSParsedObj>();

	/**
	 * Apply inline style props to CSS
	 */
	const finalCSS = {};
	for (const key in rest) {
		if (allPropsSet.has(key)) {
			// @ts-ignore
			finalCSS[key] = rest[key];
			// @ts-ignore
			delete rest[key];
		}
	}

	/**
	 * Apply CSS on top
	 */
	Object.assign(finalCSS, css);

	const next = createParsed(finalCSS, prev.current);
	if (next.checksum !== prev.current?.checksum) {
		manager.addOrUpdateObj(next);
		prev.current = next;
	}

	return (
		<Component
			{...rest}
			// @ts-ignore
			className={cx(next.className, rest.className)}
			ref={ref}
		>
			{rest.children}
		</Component>
	);
});

export default Box;
