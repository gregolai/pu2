// @ts-check
const path = require('path');

const root = path.resolve(__dirname, '../..');
const rootPackage = path.resolve(root, 'package.json');

const buildTsConfigEsm = path.resolve(root, 'tsconfig.json');

const dist = path.resolve(root, 'dist');
const distPackage = path.resolve(dist, 'package.json');

const distCjs = path.resolve(dist, 'cjs');
const distCjsIndex = path.resolve(distCjs, 'index.js');

const distEsm = path.resolve(dist, 'esm');
const distEsmIndex = path.resolve(distEsm, 'index.js');

const src = path.resolve(root, 'src');
const srcIndex = path.resolve(src, 'index.ts');

module.exports = {
	root,
	rootPackage,

	buildTsConfigEsm,

	dist,
	distPackage,
	distCjs,
	distCjsIndex,
	distEsm,
	distEsmIndex,

	src,
	srcIndex
};
