const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.base.js');


const prodWebpackConfig = merge(baseWebpackConfig, {
    /*
    output: {
        path : path.resolve(__dirname, './dist'),
        filename : 'assets/js/[name].[chunkhash].js'
    }
    plugins : [
        new ExtractTextPlugin("assets/css/style.[chunkhash].css"),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: true
        }),

    ],
    devtool: '#source-map'
    */
});

module.exports = prodWebpackConfig;