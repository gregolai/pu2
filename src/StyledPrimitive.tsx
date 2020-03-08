import React, { useRef } from 'react';
import SheetManager from './exploration/SheetManager';
import { createParsed, CSSParsedObj, CSSObject } from './exploration/parseCSS';
import { cx } from './cx';

const manager = new SheetManager('g');

interface Props {
	as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
	css: CSSObject;
	[key: string]: any;
}

const StyledPrimitive: React.FC<Props> = ({ as: Component = 'div', css, ...rest }) => {
	const ref = useRef<CSSParsedObj>();

	const obj = createParsed(css, ref.current);
	if (!ref.current || obj.checksum !== ref.current.checksum) {
		manager.addOrUpdateObj(obj);
		ref.current = obj;
	}

	return (
		<Component {...rest} className={cx(ref.current?.className, rest.className)}>
			{rest.children}
		</Component>
	);
};

export default StyledPrimitive;
