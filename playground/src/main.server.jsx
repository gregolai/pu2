const React = require('react');
const { renderToString } = require('react-dom/server');
const path = require('path');
const express = require('express');

const { SSRStyleCollector, SSRStyleProvider } = require('../../src/style-lib/server');
const { App } = require('./App');

const { StrictMode } = React;

const renderSSR = ({ appHtml, styleHtml }) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<title>Playground</title>
	${styleHtml}
	<script defer type="text/javascript" src="main.client.js"></script>
</head>
<body><div id="root">${appHtml}</div></body>
</html>
`;

const port = 9001;
const server = express();

server.use('/', express.static(path.resolve(__dirname, '../client')));

server.get('*', async (req, res) => {
	const collector = new SSRStyleCollector();
	appHtml = renderToString(
		<StrictMode>
			<SSRStyleProvider collector={collector}>
				<App />
			</SSRStyleProvider>
		</StrictMode>
	);
	styleHtml = collector.getHtml();

	res.status(200).set({ 'Content-Type': 'text/html' }).end(renderSSR({ appHtml, styleHtml }));
});

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
