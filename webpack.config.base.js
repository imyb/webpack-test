const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const baseWebpackConfig = {
    entry : {
        //vendor : [],
        bundle : './src/index.js'
    },
    output : {
        path : path.resolve(__dirname, './dist'),
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
                    use : ['css-loader', 'sass-loader?outputStyle=expanded']
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
    }
};

module.exports = baseWebpackConfig;