const path = require('path');
const webpack = require('webpack');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: path.resolve(__dirname),
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	node: {
		// fs: 'empty'
	},

	entry: {
		main: path.resolve(__dirname, 'src/main.ts')
	},

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'public')
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [{ loader: 'ts-loader' }]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true
		})
	],

	resolve: {
		alias: {
			// react: 'preact/compat',
			// 'react-dom': 'preact/compat'
			// 'create-react-class': 'preact-compat/lib/create-react-class',
			// Not necessary unless you consume a module requiring `react-dom-factories`
			// 'react-dom-factories': 'preact-compat/lib/react-dom-factories'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: ['../src', 'node_modules']
	}
};
