const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
module.exports = {
  mode: "production",
  entry: {
    "src/popup/popup": "./src/popup/popupScript.ts",
    "src/content-scripts/crunchyrollVideoPlayerV2":
      "./src/content-scripts/crunchyrollVideoPlayerV2.ts",
    "src/content-scripts/injectInTab": "./src/content-scripts/injectInTab.ts",
    "src/web-accessible-resources/tab":
      "./src/web-accessible-resources/tabScript.ts",
    "src/web-accessible-resources/vilosOverride":
      "./src/web-accessible-resources/vilosOverrideScript.ts",
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
    path: path.resolve(__dirname, "built/Chrome/"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "LICENSE" },
        { from: "manifest.json" },
        { from: "rules.json" },
        { from: "src/icons", to: "src/icons" },
        {
          from: "src/content-scripts/injectInPlayer.js",
          to: "src/content-scripts/injectInPlayer.js",
        },
        {
          from: "src/content-scripts/crunchyrollVideoPlayer2.css",
          to: "src/content-scripts/crunchyrollVideoPlayer2.css",
        },
        { from: "src/popup/popup.html", to: "src/popup/popup.html" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
