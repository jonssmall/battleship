const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './game.ts',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}