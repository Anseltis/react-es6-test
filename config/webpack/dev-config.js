import * as path from 'path';

import { paths } from '../../settings';
import { config as baseConfig } from './config';

export const config = {
    ...baseConfig,
    devtool: 'source-map',
    mode: 'development'
};
