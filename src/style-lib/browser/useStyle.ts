import { useContext } from 'react';
import { StyleContext } from '../internal/StyleProvider';
import { CSSInput } from '../internal/parser';

export const useStyle = (input: CSSInput) => {
	const c = useContext(StyleContext);
	if (!c) return '';
	const p = c.parse(input);
	c.add(p);
	return p.className;
};
