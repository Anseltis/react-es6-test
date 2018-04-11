const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
};

module.exports = {
    entry: path.join(paths.src, 'index.js'),
    mode: 'development',
    devServer: {
        contentBase: paths.src,
    },
    output: {
        path: paths.dist,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-es2015',
                        ],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.src, 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
