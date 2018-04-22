import * as path from 'path';

export const port = 8080;
export const paths = {
    distName: 'dist',
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    root: __dirname,
};