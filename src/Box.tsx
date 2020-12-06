import React, { forwardRef, useRef } from 'react';
import cx, { CxClassName } from './cx';
import { createParsed, CSSObject, CSSParsedObj } from './exploration/parseCSS';
import SheetManager from './exploration/SheetManager';
import { AllProps, allPropsSet } from './exploration/allCSSProps';

const manager = new SheetManager();

type PartialProps<T> = {
	[P in keyof T]?: T[P] | false;
};

export type BoxProps = PartialProps<AllProps> & {
	as?: AsComponent;
	className?: CxClassName;
	css?: CSSObject;
	ref?: React.Ref<HTMLElement>;
	[key: string]: any;
};

const Box: React.FC<BoxProps> = forwardRef<HTMLElement, BoxProps>(
	({ as: Component = 'div', css = {}, ...rest }, ref) => {
		const prev = useRef<CSSParsedObj>();

		/**
		 * Apply inline style props to CSS
		 * e.g. <Box backgroundColor="green" color="white">
		 */
		const finalCSS: CSSObject = {};
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

		const next = createParsed(finalCSS, prev.current);
		if (next.checksum !== prev.current?.checksum) {
			manager.addOrUpdateObj(next);
			prev.current = next;
		}

		return <Component ref={ref} {...rest} className={cx(next.className, rest.className)} />;
	}
);

export default Box;
