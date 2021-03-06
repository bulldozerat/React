const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: './dist/build.js'
  },
  //watch: true,
  devtool: 'source-map',
  devServer: { open: true},
  module: {
  loaders: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader?sourceMap!sass-loader?sourceMap"
      })
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules$/
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules$/
    }
  ]
},
  plugins: [
    new ExtractTextPlugin("./dist/styles/styles.css"),
  ]
};
