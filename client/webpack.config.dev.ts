import path from 'path';
import baseConfig from './webpack.config';

const config = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
};

export default config;