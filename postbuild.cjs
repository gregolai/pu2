const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const writePackage = (json, outPath) => {
	fs.writeFileSync(path.resolve(__dirname, outPath), JSON.stringify(json));
};

writePackage(
	{
		type: 'module'
	},
	'dist/esm/package.json'
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
