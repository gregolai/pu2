const path = require('path');
const { exec, execSync } = require('child_process');
const { series, parallel } = require('gulp');

const ROOT_DIR = path.resolve(__dirname);
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const DIST_ESM_DIR = path.resolve(DIST_DIR, 'esm');

const cleanESM = cb => {
	exec(`rm -rf ${DIST_ESM_DIR}`, cb);
};

const buildESM = cb => {
	exec(
		`NODE_ENV=esm babel src -d ${DIST_ESM_DIR} --extensions '.ts,.tsx,.js,.jsx' --source-maps inline`,
		cb
	);
};

const buildTypes = cb => {
	exec(
		`npx tsc --jsx react --declaration true --declarationDir ${DIST_ESM_DIR} --emitDeclarationOnly true`,
		(error, stdout, stderr) => {
			console.log({ error, stdout, stderr });
			cb(stdout);
		}
	);
};

// const showSize = cb => {
// 	const SCRIPTS_DIR = path.resolve(ROOT_DIR, 'scripts');
// 	const FILESIZE_PATH = path.resolve(SCRIPTS_DIR, 'file-size.js');
// 	exec(`node ${FILESIZE_PATH} ./dist/bundles/index.umd.min.js ./dist/bundles/index.esm.min.js`, cb)
// }

exports['build:esm'] = series(cleanESM, parallel(buildESM, buildTypes));
