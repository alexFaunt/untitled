const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
	entry: './app/index.jsx',

	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'build')
	},

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-1'],
					plugins: ['transform-decorators-legacy', 'transform-class-properties']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
			}
		]
	},

	postcss: [
		require('autoprefixer'),
		require('postcss-inline-comment'),
		require('postcss-for'),
		require('postcss-calc'),
		require('postcss-nested')
	],

	resolve: {
		root: __dirname,
		modulesDirectories: ['node_modules', 'components']
	},

	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		})
	],

	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"React": "react"
	},

	devtool: '#source-map'
};
