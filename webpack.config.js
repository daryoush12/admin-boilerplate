var path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
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
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new BundleAnalyzerPlugin(),
    ],

    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/Components/'),
            '@Actions': path.resolve(__dirname, 'src/Store/Actions/'),
            '@ActionTypes': path.resolve(
                __dirname,
                'src/App/Store/Actions/Types/'
            ),
            '@Reducers': path.resolve(__dirname, 'src/Store/Reducers/'),
            '@Store': path.resolve(__dirname, 'src/Store/'),
        },
    },
}
