import React from 'react';
import { render } from 'react-dom';
import App from './app/App';

const el = document.createElement('div');
document.body.appendChild(el);

render(React.createElement(App, {}, 'hello,xxx'), el);

// if (module.hot) {
// 	module.hot.accept('./entry.js');
// }
