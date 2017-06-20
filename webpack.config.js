const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "script.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port:3003,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
}