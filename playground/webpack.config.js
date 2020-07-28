const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('../scripts/paths');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: paths.playground,
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		//contentBase: paths.playgroundPublic,
		port: 9001
	},
	node: {
		fs: 'empty'
	},

	entry: paths.playgroundEntry,

	output: {
		filename: '[name].js',
		path: paths.playgroundPublic,
		chunkFilename: '[name].js'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json'
						}
					}
				]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlPlugin({
			favicon: 'favicon.ico'
		}),
		new webpack.DefinePlugin({
			__DEV__: true
		})
		// https://webpack.js.org/configuration/dev-server/#devserverhot
		//new webpack.HotModuleReplacementPlugin()
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
		modules: [paths.src, 'node_modules']
	}
};
