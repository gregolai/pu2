const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('../scripts/utils/paths');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	cache: true,
	context: paths.playground,
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		port: 9001,
		hot: true
	},
	node: {
		fs: 'empty'
	},

	entry: paths.playgroundEntry,

	// NO NEED FOR OUTPUT IF ONLY RUNNING DEVSERVER
	// output: { },

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
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	resolve: {
		alias: {
			react: 'preact/compat',
			'react-dom': 'preact/compat',

			'create-react-class': 'preact-compat/lib/create-react-class',
			// Not necessary unless you consume a module requiring `react-dom-factories`
			'react-dom-factories': 'preact-compat/lib/react-dom-factories'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: [paths.src, 'node_modules']
	}
};
