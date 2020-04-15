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
const log = require('./log');
const paths = require('./paths');

const buildEsm = async () => {
	log('BUILD:ESM');
	try {
		execSync(`npx tsc -p ${paths.tsconfigEsm}`);
	} catch (e) {
		throw new Error(e.stdout.toString());
	}
};

const cleanDist = () => {
	log('CLEAN:DIST');
	try {
		execSync(`rm -rf ${paths.dist}`);
	} catch (e) {
		log.error(e.stdout.toString());
	}
};

const cleanCoverage = () => {
	log('CLEAN:COVERAGE');
	try {
		execSync(`rm -rf ${paths.coverage}`);
	} catch (e) {
		log.error(e.stdout.toString());
	}
};

switch (process.argv[2]) {
	case 'build':
		(async () => {
			await cleanDist();
			await buildEsm();
		})();
		break;

	case 'clean':
		cleanDist();
		break;
}
