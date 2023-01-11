import path from 'path';
import baseConfig from './webpack.config';

const config = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};

export default config;