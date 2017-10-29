const path = require('path');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: './webpack/entry.jsx',
  devtool: 'source-map',
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
    path: path.join(__dirname, '/jekyll/assets/javascripts/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
};
