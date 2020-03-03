import { render, createElement } from 'preact';
import App from './app/App';

render(createElement(App, {}, 'hello,xxx'), document.body);

// if (module.hot) {
// 	module.hot.accept('./entry.js');
// }
