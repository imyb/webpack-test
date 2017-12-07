const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.base.js');


const prodWebpackConfig = merge(baseWebpackConfig, {
    output: {
        path : path.resolve(__dirname, './dist'),
        filename : 'assets/js/[name].[chunkhash].js',
        //chunkFilename: 'assets/js/[name].[chunkhash].chunk.js'
    },
    plugins : [
        new ExtractTextPlugin("assets/css/style.[chunkhash].css"),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })

    ],
    devtool: false
});

module.exports = prodWebpackConfig;