const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
module.exports = {
  mode: "production",
  entry: {
    "src/background-scripts/background":
      "./src/background-scripts/backgroundScript.ts",
    "src/popup/popup": "./src/popup/popupScript.ts",
    "src/web-accessible-resources/tab":
      "./src/web-accessible-resources/tabScript.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif$)/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "built/Firefox/"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "LICENSE" },
        { from: "manifest.json" },
        {
          from: "src/content-scripts/listener.js",
          to: "src/content-scripts/listener.js",
        },
        { from: "src/popup/popup.html", to: "src/popup/popup.html" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
