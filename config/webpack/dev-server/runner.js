import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { config, serverConfig } from './config'

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(serverConfig.port, 'localhost', err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost: ${serverConfig.port}`);
});