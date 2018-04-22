import { paths } from '../../../settings';
import { config as baseConfig } from '../dev-config';

export const config = {
    ...baseConfig,
    output: {
        path: paths.dist,
        filename: 'bundle.js',
    }
};