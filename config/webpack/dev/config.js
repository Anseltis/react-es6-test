import CleanWebpackPlugin from 'clean-webpack-plugin';

import { paths } from '../../../settings';
import { config as baseConfig } from '../dev-config';

export const config = {
    ...baseConfig,
    output: {
        path: paths.dist,
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin([paths.distName], { root: paths.root }),
        ...baseConfig.plugins
    ]
};