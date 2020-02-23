const path = require('path');
const fs = require('fs');
const { exec, execSync } = require('child_process');
const { series, parallel } = require('gulp');
const prettier = require('prettier');

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const DIST_PACKAGE = path.resolve(DIST_DIR, 'package.json');
const DIST_ESM_DIR = path.resolve(DIST_DIR, 'esm');
const DIST_ESM_INDEX = path.resolve(DIST_ESM_DIR, 'index.js');
const ROOT_PACKAGE = path.resolve(ROOT_DIR, 'package.json');

const jsonFormat = source => {
	return prettier.format(JSON.stringify(source), {
		parser: 'json'
	});
};

const cleanDist = cb => {
	exec(`rm -rf ${DIST_DIR}`, cb);
};

const buildTS = cb => {
	exec('npx tsc', cb);
};

// const buildESM = cb => {
// 	exec(
// 		`NODE_ENV=esm babel src -d ${DIST_ESM_DIR} --extensions '.ts,.tsx,.js,.jsx' --source-maps inline`,
// 		cb
// 	);
// };

// const buildTypes = cb => {
// 	exec(
// 		`npx tsc --jsx react --declaration true --declarationDir ${DIST_ESM_DIR} --emitDeclarationOnly true`,
// 		(error, stdout, stderr) => {
// 			console.log({ error, stdout, stderr });
// 			cb(stdout);
// 		}
// 	);
// };

const createPackageJSON = cb => {
	// Omit extraneous keys from package.json
	const { devDependencies, husky, scripts, ...pkg } = JSON.parse(
		fs.readFileSync(ROOT_PACKAGE, { encoding: 'utf-8' })
	);
	delete pkg['lint-staged'];

	const DIST_MAIN = path.relative(DIST_DIR, DIST_ESM_INDEX);
	const distPackage = {
		...pkg,
		main: DIST_MAIN,
		module: DIST_MAIN
	};

	fs.writeFileSync(DIST_PACKAGE, jsonFormat(distPackage), { encoding: 'utf-8' });
	cb();
};

const copyMetaFiles = cb => {
	const copy = filename =>
		fs.copyFileSync(path.resolve(ROOT_DIR, filename), path.resolve(DIST_DIR, filename));

	copy('README.md');
	copy('CHANGELOG.md');
	copy('LICENSE');
	cb();
};

// const showSize = cb => {
// 	const SCRIPTS_DIR = path.resolve(ROOT_DIR, 'scripts');
// 	const FILESIZE_PATH = path.resolve(SCRIPTS_DIR, 'file-size.js');
// 	exec(`node ${FILESIZE_PATH} ./dist/bundles/index.umd.min.js ./dist/bundles/index.esm.min.js`, cb)
// }

exports.build = series(cleanDist, buildTS, parallel(copyMetaFiles, createPackageJSON));
exports.clean = series(cleanDist);
