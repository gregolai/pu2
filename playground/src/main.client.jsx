import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserStyleProvider } from '../../src/style-lib';
import { App } from './App';

ReactDOM.hydrate(
	<StrictMode>
		<BrowserStyleProvider>
			<App />
		</BrowserStyleProvider>
	</StrictMode>,
	document.getElementById('root')
);
