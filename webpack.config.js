const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: ''
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist'])
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         // MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         'style-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: [
  //         'csv-loader'
  //       ]
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: [
  //         'xml-loader'
  //       ]
  //     }
  //   ]
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/public', 'dist')
  }
};
