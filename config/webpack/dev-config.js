import * as path from 'path';

import { paths } from '../../settings';
import { config as baseConfig } from './config';

export const config = {
    ...baseConfig,
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            ...baseConfig.module.rules,
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }    
};
