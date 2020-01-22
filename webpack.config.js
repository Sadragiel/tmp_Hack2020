const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, './client-side/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client-side/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  resolve: {
    alias: {
      'store': path.resolve(__dirname, './client-side/store'),
      'utils': path.resolve(__dirname, './client-side/utils'),
      'components': path.resolve(__dirname, './client-side/components'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ],
  },
};