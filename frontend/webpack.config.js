const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'static/frontend'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(s[ac]ss|less|css)$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					"postcss-loader",
					
				],
			},
			{
				test: /\.(png|jpg|gir)$/i,
				type: 'asset/resource'
			},
		]
	},
	
	
}