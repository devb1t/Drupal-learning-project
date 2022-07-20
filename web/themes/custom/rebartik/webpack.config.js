const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    dscss: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ]
};