const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const baseWebpackConfig = {
    entry : {
        bundle : [
            './src/index.js'
        ],
        vendor : [
            './src/assets/js/vendor/test1.js',
            './src/assets/js/vendor/test2.js'
        ]
    },
    output : {
        path : path.resolve(__dirname, './dist'),
        publicPath : '/',
        filename : 'assets/js/[name].js'
    },
    resolve : {
        extensions: ['*', '.js','jsx']
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                loaders : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : ['css-loader', 'sass-loader?outputStyle=compressed']
                })
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
};

module.exports = baseWebpackConfig;