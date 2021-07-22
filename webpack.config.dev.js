const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
  mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {minimize: true},
					},
				],
			},
				{
				test: /\.(s*)css$/,
				use: [{loader: miniCssExtractPlugin.loader}, 'css-loader', 'sass-loader',],
			},
			{
				type: 'asset',
				test: /\.(png|jpg|svg)$/i,
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			injet: true,
			template: path.resolve(__dirname, 'public/index.html'),
			filename: './index.html',
		}),
		new miniCssExtractPlugin({
			filename: 'styles/[name][contenthash].css',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
    historyApiFallback: true,
    open: true,
	},
};
