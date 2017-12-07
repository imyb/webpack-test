const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config.base.js');


const devWebpackConfig = merge(baseWebpackConfig, {
    plugins : [

        new ExtractTextPlugin("assets/css/style.css"),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true
        })

    ],
    devServer : {
        //publicPath: "/dist/",
        contentBase : './dist',
        port: 8080,
        hot: true
    },
    devtool: 'eval-source-map'
});

module.exports = devWebpackConfig;