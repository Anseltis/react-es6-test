import * as path from 'path';

export const port = 8080;
export const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    context: __dirname,
};