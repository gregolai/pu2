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
		execSync(`npx tsc -p ${paths.buildTsConfigEsm}`);
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

const createPackageJSON = async () => {
	// Omit extraneous keys from package.json
	const { devDependencies, husky, scripts, ...pkg } = JSON.parse(
		fs.readFileSync(paths.rootPackage, { encoding: 'utf-8' })
	);
	delete pkg['lint-staged'];

	const DIST_MAIN = path.relative(paths.dist, paths.distEsmIndex);
	const distPackage = {
		...pkg,
		main: DIST_MAIN,
		module: DIST_MAIN
	};

	const jsonFormat = source => {
		return prettier.format(JSON.stringify(source), {
			parser: 'json'
		});
	};

	fs.writeFileSync(paths.distPackage, jsonFormat(distPackage), { encoding: 'utf-8' });
};

const copyMetaFiles = async () => {
	const copy = filename =>
		fs.copyFileSync(path.resolve(paths.root, filename), path.resolve(paths.dist, filename));

	copy('README.md');
	copy('LICENSE');
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
			await Promise.all([createPackageJSON(), copyMetaFiles()]);
		})();
		break;

	case 'clean':
	case 'clean:dist':
		cleanDist();
		break;

	default:
		break;
}
