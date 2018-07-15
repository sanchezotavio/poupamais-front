const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  performance: { hints: false },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
};