/**
 * @type {Partial<jest.InitialOptions>}
 */
module.exports = {
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
		__TEST__: true,
		'ts-jest': {
			useESM: true
		}
	},
	preset: 'ts-jest',
	resetMocks: true,
	rootDir: '.',
	setupFiles: ['jest-localstorage-mock'],
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
	testPathIgnorePatterns: ['node_modules'],
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
