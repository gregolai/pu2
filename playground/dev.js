const { spawn } = require('child_process');
const fps = require('fs/promises');
const path = require('path');
const esbuild = require('esbuild');
const chokidar = require('chokidar');
const kleur = require('kleur');

const fail = (m) => console.log(kleur.bgRed(kleur.white(m)));
const success = (m) => console.log(kleur.bgGreen(kleur.black(m)));

const buildClient = async () => {
	try {
		await esbuild.build({
			bundle: true,
			define: {
				__DEV__: true
			},
			entryPoints: ['src/main.client.jsx'],
			format: 'iife',
			outdir: 'client'
		});
	} catch (e) {
		fail('CLIENT BUILD ERROR');
		console.error(e.message);
		return false;
	}

	success('BUILT CLIENT');
	return true;
};

const buildServer = async () => {
	try {
		await esbuild.build({
			bundle: true,
			define: {
				__DEV__: true
			},
			entryPoints: ['src/main.server.jsx'],
			platform: 'node',
			outdir: 'server'
		});
	} catch (e) {
		fail('SERVER BUILD ERROR');
		console.error(e.message);
		return false;
	}

	success('BUILT SERVER');
	return true;
};

const buildAll = async () => {
	if (await buildClient()) {
		await buildServer();
	}
};

let server = null;
const startServer = async () => {
	await stopServer();

	server = spawn('node', ['server/main.server.js']);

	server.stdout.setEncoding('utf-8');
	server.stdout.on('data', (data) => {
		console.log(data);
	});
	server.stderr.setEncoding('utf-8');
	server.stderr.on('data', (data) => {
		console.error(data);
	});
};

const stopServer = async () => {
	if (server) {
		server.kill();
		server = null;
	}
};

let ready = false;
chokidar.watch('./src').on('all', async (event, filePath) => {
	if (!ready) return;

	console.log(event, filePath);

	await stopServer();
	if (filePath === 'src/main.server.tsx') {
		await buildServer();
	} else {
		await buildAll();
	}
	await startServer();
});

(async () => {
	await buildAll();
	await startServer();
	ready = true;
})();
