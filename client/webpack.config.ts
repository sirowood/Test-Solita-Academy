import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  },
  {
    test: /\.css$/i,
    use: [
      'style-loader',
      'css-loader',
      'postcss-loader'
    ],
  },
];

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../server/build/dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/public/index.html'),
      favicon: path.resolve(__dirname, 'src/public/favicon.ico'),
    }),
  ],
};

export default config;