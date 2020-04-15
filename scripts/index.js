// @ts-check
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
// const qs = require("querystring");
const { execSync } = require('child_process');
const process = require('process');
// const glob = require("glob");

// const gitConfigParser = require("parse-git-config");
// const notifier = require("node-notifier");
const { log, paths } = require('./utils');

const buildEsm = async () => {
	log('BUILD:ESM');
	try {
		execSync(`npx tsc -p ${paths.tsconfigEsm}`);
	} catch (e) {
		throw new Error(e.stdout.toString());
	}
};

const cleanDist = async () => {
	log('CLEAN:DIST');
	try {
		execSync(`rm -rf ${paths.dist}`);
	} catch (e) {
		log.error(e.stdout.toString());
	}
};

switch (process.argv[2] || 'help') {
	case 'help':
	case 'help:package-scripts':
		const json = JSON.parse(fs.readFileSync(paths.rootPackage, { encoding: 'utf-8' }));
		console.log('--- PACKAGE SCRIPTS ---');
		Object.keys(json.scripts)
			.sort()
			.forEach(c => console.log(c));
		break;
	// {
	// 	const content = fs.readFileSync(__filename, {
	// 		encoding: 'utf-8'
	// 	});
	// 	const regexp = /case\s[\'\"]([\w\-\:]+)[\'\"]/g;

	// 	console.log('--- COMMANDS ---');

	// 	const commands = [];
	// 	let arr;
	// 	while ((arr = regexp.exec(content)) !== null) {
	// 		commands.push(arr[1]);
	// 	}
	// 	// SORT ALPHABETICALLY AND LOG
	// 	commands.sort().forEach(c => console.log(c));
	// }
	// break;

	case 'build':
	case 'build:esm':
		(async () => {
			await cleanDist();
			await buildEsm();
			await Promise.all([
				/*createPackageJSON(), copyMetaFiles()*/
			]);
		})();
		break;

	case 'clean':
	case 'clean:dist':
		cleanDist();
		break;

	default:
		break;
}
