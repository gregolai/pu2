const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const writePackage = (json, dest) => {
	fs.writeFileSync(path.resolve(__dirname, dest), JSON.stringify(json));
};

const copyFile = (src, dest) => {
	fs.copyFileSync(src, path.resolve(__dirname, dest));
};

const rootPkg = require('./package.json');
writePackage(
	{
		...rootPkg,
		engines: undefined,
		files: undefined,
		main: 'index.js',
		// main: 'cjs/index.js',
		// module: 'esm/index.js',
		// types: 'types/index.d.js',
		husky: undefined,
		'lint-staged': undefined,
		scripts: undefined,
		'standard-version': undefined
	},
	'dist/package.json'
);

copyFile('LICENSE', 'dist/LICENSE');
copyFile('README.md', 'dist/README.md');

// writePackage(
// 	{
// 		type: 'module'
// 	},
// 	'dist/esm/package.json'
// );
