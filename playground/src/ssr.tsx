import React from 'react';
import { renderToString } from 'react-dom/server';
import { ParsedCSS } from '../../dist/esm/exploration/parseCSS';
import { createStyles } from '../../dist/esm/exploration/applyParsedCSS';
import { StyleSSRProvider } from '../../dist/esm/StyleSSRProvider';
import { App } from './App';

async function func() {
	const parsedList = [];
	const pushParsed = (p: ParsedCSS) => {
		parsedList.push(p);
	};

	const s = renderToString(
		<StyleSSRProvider pushParsed={pushParsed}>
			<App />
		</StyleSSRProvider>
	);

	let fullStyles = createStyles(parsedList);
	console.log(fullStyles);

	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
}
func();
// );
