# pu2

[![Build Status](https://travis-ci.org/gregolai/pu2.svg?branch=master)](https://travis-ci.org/gregolai/pu2)
[![NPM version](https://img.shields.io/npm/v/pu2.svg)](https://www.npmjs.com/package/pu2)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

---

[Me](https://gregoryland.com)

## Style Lib

Everything goes through `<Box>`
```typescript
// src/client/MyButton.tsx
import React from 'react';
import { Box } from 'pu2';


// Renders a <div> element with a button role
export const MyButton = ({ children, onClick }) => (
	<Box
		role="button"
		cursor="pointer"
		display="flex"
		alignItems="center"
		justifyContent="center"
		onClick={onClick}
	>
		{children}
	</Box>
);

// Renders a <button> element with some icon
export const MyButton2 = ({ children, icon, onClick }) => (
	<Box as="button" onClick={onClick}>
		{icon}
		{children}
	</Box>
);

// Passing some css as a prop will override style props (renders a black button with white text)
const css = { color: 'white', background: 'black' };
export const MyButton4 = ({ children, onClick }) => (
	<Box color="orange" css={css} onClick={onClick}>
		{children}
	</Box>
);

// Get fancy. Generate classnames on-the-fly, including media queries and sub-selectors.
const css = {
	color: 'lightblue',
	
	// Match descendent children (notice the space before the selector)
	' span': {
		color: 'green',

		'[data-value]': { color: 'silver' }, // Match attribute

		'.x': { color: 'wheat' } // Match classname (no space before the selector)
	},
	' .b': { color: 'orange' },

	// Match immediate children
	'>span': { color: 'blue' },
	'>.b': {
		color: 'yellow',

		':hover': { color: 'cyan' } // Match element state
	},

	// Match a media query
	'@media screen and (max-width: 600px)': {
		color: 'magenta',

		'>span': { color: 'red' }
	}
}
export const MyButton5 = ({ onClick, prefix }) => (
	<Box css={css} onClick={onClick}>
		lightblue...or magenta when <=600px screen width
		<Box className="a">black</Box>
		<Box as="span">
			blue...or red when <=600px screen width
			<Box className="b">orange</Box>
		</Box>
		<Box className="b">
			yellow...or cyan when hovering
			<Box as="span">green</Box>
			<Box as="span" data-value="10">silver</Box>
			<Box as="span" className="x">wheat</Box>
		</Box>
		<Box className="b">
	</Box>
)


```

## Basic SSR

```typescript
// src/client/App.ts
import React from 'react';
import { Box } from 'pu2';

export const App = () => (
	<Box background="blue" p="16px">
		<Box color="red" background="white" p="8px">
			Text
		</Box>
	</Box>
);
```

```typescript
// src/client/main.client.ts
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

ReactDOM.hydrate(
	React.createElement(App),
	document.body
)
```

```typescript
// src/server/main.server.ts
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { getSSRStyleString } from 'pu2/dist/esm/style-lib/style-maker';
import { StyleSSRProvider } from 'pu2/dist/esm/style-lib/StyleSSRProvider';

import { App } from '../client/App';

const renderSSR = ({ appHtml, styleHtml }) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>My App</title>
		${styleHtml}
	</head>
	<body>
		${appHtml}
	</body>
</html>
`;

const server = express();

server.get('/', async (req, res) => {

	const styles = [];

	const appHtml = renderToString(
		<StyleSSRProvider styles={styles}>
			<App />
		</StyleSSRProvider>
	);

	const styleHtml = getSSRStyleString(styles);

	res.status(200)
		.set({ 'Content-Type': 'text/html' })
		.end(renderSSR({ appHtml, styleHtml }));
});
server.listen(3000);
```