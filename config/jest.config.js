/**
 * @type {Partial<jest.InitialOptions>}
 */
const config = {
	preset: 'ts-jest',
	rootDir: '..',
	testMatch: ['<rootDir>/src/**/__tests__/**/*.ts?(x)', '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
	testPathIgnorePatterns: ['dist'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},
	watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};

module.exports = config;
