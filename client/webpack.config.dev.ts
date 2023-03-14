import path from 'path';
import { DefinePlugin } from 'webpack';
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
  watchOptions: {
    poll: 1000,
    ignored: '**/node_modules',
  },
  plugins: [
    ...baseConfig.plugins,
    new DefinePlugin({
      API_URL: JSON.stringify('http://localhost:3001/api'),
    })
  ]
};

export default config;