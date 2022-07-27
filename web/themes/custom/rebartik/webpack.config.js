const path = require("path");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    javascript: ["./src/js_index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCss.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCss({
      filename: "style.css"
    })
  ]
};
