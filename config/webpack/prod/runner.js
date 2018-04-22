import webpack from 'webpack';

import { config } from './config'

const compiler = webpack(config);
compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }
    console.log(stats.toString({
        chunks: false,
        colors: true,
        verbose: true
    }));
});


