import { render, createElement } from 'preact';
import App from './app/App';

render(createElement(App, {}, 'hello,zzzfffdsfdsf'), document.body);

if (module.hot) {
	module.hot.accept('./entry.js');
}
