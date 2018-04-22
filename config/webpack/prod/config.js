import autoprefixer from 'autoprefixer';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { paths } from '../../../settings';
import { config as baseConfig } from '../config';

export const config = {
    ...baseConfig,
    devtool: 'none',
    mode: 'production',
    module: {
        rules: [
            ...baseConfig.module.rules,
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [precss, autoprefixer]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    optimization: {
        runtimeChunk: false,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    output: {
        path: paths.dist,
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin([paths.distName], { root: paths.root }),
        ...baseConfig.plugins,
        new ExtractTextPlugin('style.[hash].css')
    ]
};