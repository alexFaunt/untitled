
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
	return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
	nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
	entry: './server.jsx',

	target: 'node',

	output: {
		filename: 'server.js',
		path: path.join(__dirname, 'build')
	},

	externals: nodeModules,

	module: {
		loaders: [
			{
				test: /\.jsx|\.js/,
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
		modulesDirectories: ['node_modules']
	},

	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		})
	],

	node: {
		__dirname: true
	}
};
