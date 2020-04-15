// @ts-check
const path = require('path');

const root = path.resolve(__dirname, '..');
const rootPackage = path.resolve(root, 'package.json');

const tsconfigEsm = path.resolve(root, 'tsconfig.json');

const coverage = path.resolve(root, 'coverage');

const dist = path.resolve(root, 'dist');
const distEsm = path.resolve(dist, 'esm');
const distEsmIndex = path.resolve(distEsm, 'index.js');

const src = path.resolve(root, 'src');
const srcIndex = path.resolve(src, 'index.ts');

const playground = path.resolve(root, 'playground');
const playgroundEntry = path.resolve(playground, 'entry.js');
const playgroundIndex = path.resolve(playground, 'index.ejs');
const playgroundPublic = path.resolve(playground, 'public');

module.exports = {
	root,
	rootPackage,

	tsconfigEsm,

	coverage,

	dist,
	distEsm,
	distEsmIndex,

	src,
	srcIndex,

	playground,
	playgroundEntry,
	playgroundIndex,
	playgroundPublic
};
