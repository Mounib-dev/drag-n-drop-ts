const path = require("path");

module.exports = {
  mode: "development",
  // The source code of the app to bundle
  // (by default webpack doesn't know ts extension)
  entry: "./src/app.ts",
  // The code will webpack produce
  output: {
    filename: "bundle.js",
    // We need to specify the public path (where the builded/bundled code belongs)
    // Like this '/dist/' not 'dist' or '/dist'
    publicPath: "/dist/",
    // Webpack needs an absolute pack
    path: path.resolve(__dirname, "dist"),
  },
  // We need also to enable sourceMap on tsconfig.json
  // This option helps debugging the bundled code
  devtool: "inline-source-map",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
    compress: true,
  },
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
};
