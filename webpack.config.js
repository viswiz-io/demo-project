const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PRODUCTION = ENV === 'production';

const webpackConfig = {
	name: 'client',
	target: 'web',

	entry: {
		vendor: [
			'react',
			'react-dom',
			'react-router-dom',
			'semantic-ui-css/semantic.min.css',
			'semantic-ui-react',
		],
		app: path.resolve('src/index.js'),
	},

	output: {
		filename: '[name].js',
		path: path.resolve('public/dist'),
		pathinfo: DEV,
		publicPath: '/',
	},

	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.js$/,
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				}),
			},
			{
				loader: 'url-loader',
				options: {
					limit: 5000,
				},
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/,
			},
		],
	},

	plugins: [
		new ExtractTextPlugin('styles.css'),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(ENV),
			},
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity,
		}),

		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),

		PRODUCTION &&
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					unused: true,
					dead_code: true,
					warnings: false,
				},
			}),
	].filter(plugin => !!plugin),

	resolve: {
		modules: [path.resolve('src'), 'node_modules'],
	},

	devServer: {
		contentBase: path.resolve('public'),
		historyApiFallback: {
			verbose: false,
		},
	},
};

module.exports = webpackConfig;
