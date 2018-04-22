import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';

import { paths } from '../../settings';

export const config = {
    context: paths.context,
    entry: path.join(paths.src, 'index.jsx'),
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new WebpackBar(),
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html'),
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};