import { paths } from '../../../settings';
import { config as baseConfig } from '../config';

export const config = {
    ...baseConfig,
    devtool: 'none',
    mode: 'production',
    output: {
        path: paths.dist,
        filename: 'bundle.js',
    }
};