const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PRODUCTION = ENV === 'production';

const webpackConfig = {
	name: 'client',
	target: 'web',

	mode: PRODUCTION ? 'production' : 'development',

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
				use: ['style-loader', 'css-loader'],
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(ENV),
			},
		}),

		new HtmlWebpackPlugin({
			template: 'public/index.html',
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

	stats: 'errors-only',
};

module.exports = webpackConfig;
