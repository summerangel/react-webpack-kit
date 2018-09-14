const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, '../dist'),
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.png|.jpg/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024
                    }
                }
            },
            {
                test: /\.js|.jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: { // 引入js可以省略后缀
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, '../src/components'),
            containers: path.resolve(__dirname, '../src/containers')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['../dist'], {
            // allow the plugin to clean folders outside of the webpack root
            // Default: false - don't allow clean folder outside of the webpack root
            allowExternal: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Development'
        })
    ]
}