import path from 'path';
import { DefinePlugin } from 'webpack';
import baseConfig from './webpack.config';

const config = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  plugins: [
    ...baseConfig.plugins,
    new DefinePlugin({
      API_URL: JSON.stringify('/api'),
    })
  ]
};

export default config;