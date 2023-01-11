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

const publicDir = path.resolve(__dirname, 'src/public');
const config = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${publicDir}/index.html`,
      favicon: `${publicDir}/favicon.ico`,
    }),
  ],
};

export default config;