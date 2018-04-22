import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import WebpackBar from 'webpackbar';

import { paths } from '../../settings';

export const config = {
    context: paths.root,
    entry: path.join(paths.src, 'index.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre',
                options: {
                    failOnWarning: false,
                    emitErrors: false,
                },
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ],
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html'),
            favicon: path.join(paths.src, 'favicon.ico'),
        }),
        new StyleLintPlugin({
            failOnWarning: false,
            emitErrors: false,
            context: paths.src,
            syntax: 'scss'
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};