/**
 * @type {Partial<jest.InitialOptions>}
 */
module.exports = {
	preset: 'ts-jest',
	rootDir: '.',
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
	testPathIgnorePatterns: ['<rootDir>/dist'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},

	// ALLOWS FOR localStorage
	resetMocks: false,
	setupFiles: ['jest-localstorage-mock'],

	globals: {
		__DEV__: true,
		__TEST__: true,
		'ts-jest': {
			tsConfig: 'tsconfig.test.json'
		}
	},
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
