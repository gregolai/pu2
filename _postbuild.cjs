const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const writePackage = (json, dest) => {
	fs.writeFileSync(path.resolve(__dirname, dest), JSON.stringify(json));
};

const copyFile = (src, dest) => {
	fs.copyFileSync(src, path.resolve(__dirname, dest));
};

copyFile('LICENSE', 'dist/LICENSE');
copyFile('README.md', 'dist/README.md');

writePackage(
	{
		type: 'module'
	},
	'dist/esm/package.json'
);

const rootPkg = require('./package.json');

writePackage(
	{
		...rootPkg,
		engines: undefined,
		files: undefined,
		main: 'cjs/index.js',
		module: 'esm/index.js',
		types: 'types/index.d.js',
		husky: undefined,
		'lint-staged': undefined,
		scripts: undefined,
		'standard-version': undefined
	},
	'dist/package.json'
);

// const commitHash = getCommitHash();

function getCommitHash() {
	// const gitHubCommitHash = process.env.GITHUB_SHA && process.env.GITHUB_SHA.split('\n')[0];
	// if (gitHubCommitHash) {
	//   // eslint-disable-next-line
	//   console.info(`Using env variable GITHUB_SHA for the commit hash, got: ${gitHubCommitHash}`);
	//   return gitHubCommitHash;
	// }

	// if (process.env.EXPECT_GITHUB_SHA) {
	//   if (!gitHubCommitHash) {
	// 	// eslint-disable-next-line
	// 	console.error('No GITHUB_SHA specified');
	// 	process.exit(1);
	//   }
	// }

	const out = execSync('git rev-parse HEAD');
	return out.toString().split('\n')[0];
}
