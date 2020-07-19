import React, { forwardRef, useRef } from 'react';
import cx from './cx';
import { createParsed, CSSObject, CSSParsedObj } from './exploration/parseCSS';
import SheetManager from './exploration/SheetManager';
import { AllProps, allPropsSet } from './exploration/allCSSProps';

const manager = new SheetManager();

export interface BoxProps extends Partial<AllProps> {
	as?: React.ComponentType<any> | string;
	css?: CSSObject;
	[key: string]: any;
}

const Box = forwardRef<any, BoxProps>(({ as: Component = 'div', css = {}, ...rest }, ref) => {
	const prev = useRef<CSSParsedObj>();

	/**
	 * Apply inline style props to CSS
	 */
	css = { ...css };
	for (const key in rest) {
		if (allPropsSet.has(key)) {
			css[key] = rest[key];
		}
	}

	const next = createParsed(css, prev.current);
	if (next.checksum !== prev.current?.checksum) {
		manager.addOrUpdateObj(next);
		prev.current = next;
	}

	return (
		<Component {...rest} className={cx(next.className, rest.className)} ref={ref}>
			{rest.children}
		</Component>
	);
});

export default Box;
