const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './task_5/dashboard/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'task_5/dashboard/dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'task_5/dashboard/dist'),
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './task_5/dashboard/dist/index.html',
        }),
    ],
    devtool: 'inline-source-map',
};
