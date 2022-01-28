const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
module.exports = {
	entry: {
		server: path.resolve(__dirname, './src/ssr.tsx')
	},
	mode: 'production',
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				// include: resolve(`../${name}`),
				loader: 'ts-loader',
				options: {
					configFile: path.resolve(__dirname, 'tsconfig.json')
				}
			}
		]
	},
	optimization: {
		minimize: false
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js',
		publicPath: ''
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	target: 'node'
};
