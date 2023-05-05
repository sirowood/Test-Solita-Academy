import { DefinePlugin } from 'webpack';
import baseConfig from './webpack.config';

const config = {
  ...baseConfig,
  mode: 'production',
  plugins: [
    ...baseConfig.plugins,
    new DefinePlugin({
      API_URL: JSON.stringify('/api'),
    })
  ]
};

export default config;