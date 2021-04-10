const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext][query]',
                    outputPath: 'images',
                }
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/icon_512.png',
        }),
    ],
};
