const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    WeatherWidget: [path.resolve(__dirname, "app/index.js")],
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  devServer: {
    contentBase: path.join(__dirname, "app/server/bundle/"),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "app/server/bundle/"),
    publicPath: "/",
    filename: "[name]_bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          filename: "vendors_bundle.js",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 2,
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "app/")],
    extensions: [".js", ".json", ".jsx", ".scss"],
  },
  devtool: "source-map",
};
