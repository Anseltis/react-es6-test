import * as path from 'path';
import webpack from 'webpack';

import { paths, port } from '../../../settings';
import { config as baseConfig } from '../dev-config';

export const config = {
    ...baseConfig,
    entry: [
		`webpack-dev-server/client?http://localhost:${port}`,
		'webpack/hot/dev-server',
		baseConfig.entry
	],
    devServer: {
        contentBase: paths.src,
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

export const serverConfig = {
    port: port,
    publicPath: '/',
    contentBase: paths.dist,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    inline: true,
    compress: true,
    stats: { colors: true }
};