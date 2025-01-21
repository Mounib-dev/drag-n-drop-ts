const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  // The source code of the app to bundle
  // (by default webpack doesn't know ts extension)
  entry: "./src/app.ts",
  // The code will webpack produce
  output: {
    filename: "bundle.js",
    // Webpack needs an absolute pack
    path: path.resolve(__dirname, "dist"),
  },
  // We need also to enable sourceMap on tsconfig.json
  // This option helps debugging the bundled code
  devtool: false,
  // What Webpack will do with the entry found in files
  // For TypeScript...CSS...etc.
  module: {
    rules: [
      // Regex
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // What extension to look for on the source code
  resolve: {
    extensions: [".ts", ".js"],
  },
  // The Clean Webpack Plugin helps deleting (clearing) the dist folder before bundling the app again (when adding new code for example)
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
