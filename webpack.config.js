const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      cache: true,
      algorithm: 'gzip'
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true, 
      parallel: true
    })],
  },
  mode: 'production',
  watch: true,
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'photoCarouselBundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]',
            },
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
