import React, { createContext, forwardRef, useRef } from 'react';
import { Scale } from './parsers';

interface ThemeInterface {
	[Scale.Color]: { [key: string]: string };
	[Scale.Size]: { [key: string]: number };
	[Scale.Space]: number[];
}

const Context = createContext(null);

const ThemeProvider: React.FC<any> = props => {
	return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};

/*
sx={{
	color: 'primary',
	my: 2,
	mx: 4,
	p: 1
}}

parsersByName={{
	my: {
		ruleNames: ['marginTop', 'marginBottom'],
		scale: Scale.Spacing
	}
}}

theme={{
	[Scale.Size]: {
		'50': '50px',
		'100': '100px',
	},
	[Scale.Space]: ['10px', '20px', '30px']
}}
*/
const parseSx = (sx, parsersByName, theme) => {
	const resolvedCSS = {};

	for (let key in sx) {
		// e.g. { ruleNames: [], scale: Scales.Spacing }
		const parser = parsersByName[key];
		if (parser) {
			const { scale, ruleNames } = parser;

			// Get mapping or array of actual values
			const themeValues = theme[scale];
			if (themeValues) {
				// Get index or key in scale
				const scaleKey = sx[key];

				// e.g. get '22px'
				const scaleValue = themeValues[scaleKey];

				if (scaleValue !== undefined) {
					for (let i = 0, ii = ruleNames.length; i < ii; ++i) {
						const ruleName = ruleNames[i];
						resolvedCSS[ruleName] = scaleValue;
					}
				}
			}
		}
	}

	return resolvedCSS;
};
