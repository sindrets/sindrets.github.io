const path = require("path");
module.exports = {
  entry: './out/App.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: /(@types\/index)|(Strum2d)/,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "out")
  }
};