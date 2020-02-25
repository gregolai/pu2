/**
 * @type {Partial<jest.InitialOptions>}
 */
module.exports = {
	preset: 'ts-jest',
	rootDir: '..',
	testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
	testPathIgnorePatterns: ['dist'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},
	globals: {
		__DEV__: true,
		__TEST__: true
	},
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
