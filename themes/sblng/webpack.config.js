const webpack = require('webpack');
const path = require('path')

const config = {
	// context: path.resolve(__dirname,'/static-src/')
	entry: {
		filename: 'main.js',
		context: path.resolve(__dirname,'./static-src/')
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./static/js'),
	}
};

module.exports = config;