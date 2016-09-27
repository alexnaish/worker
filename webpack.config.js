var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	entry: {
		'bundle': './app/index.js'
	},

	output: {
		path: __dirname + '/build/',
		publicPath: 'build/',
		filename: '[name].js',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: [/node_modules/],
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'react', 'stage-0']
			}
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
			exclude: [/node_modules/]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("[name].css")
	]
};
