const path = require('path');
const Webyll = require('./js/build/Webyll');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: './js/browser/entry.jsx',
  devtool: 'source-map',
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
    path: path.join(__dirname, '/_site/'),
    filename: 'assets/javascripts/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // can't get eslint-import-babel-module-resolver to work, need this for lint alias resolution
      Browser: path.resolve(__dirname, 'js/browser'),
      Build: path.resolve(__dirname, 'js/build'),
      Mock: path.resolve(__dirname, 'js/__spec__/__mock__'),
    },
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
  plugins: [
    new Webyll({
      inRootPath: path.join(__dirname, 'content'),
      outRootPath: path.join(__dirname, '_site'),
    }),
  ],
  devServer: {
    contentBase: '_site',
    inline: true,
    historyApiFallback: true,
  },
};
