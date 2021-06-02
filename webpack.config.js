var path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
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
            '@Hooks': path.resolve(__dirname, 'src/Hooks/'),
        },
    },
}
