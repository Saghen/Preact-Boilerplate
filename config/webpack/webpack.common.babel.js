import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import paths from './paths';
import rules from './rules';

module.exports = {
  entry: paths.entryPath,
  output: {
    publicPath: '/'
  },
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css'],
    symlinks: false,
    cacheWithContext: false,
    alias: {
      Components: path.resolve('src/components/'),
      Views: path.resolve('src/views/'),
      Styles: path.resolve('src/styles/'),
      Config: path.resolve('src/config.js'),
      Constants: path.resolve('src/constants.js'),
      Images: path.resolve('src/images/'),
      Libs: path.resolve('src/libs/'),
      Store: path.resolve('src/store/'),
      Icons: path.resolve('src/icons/'),
      Root: path.resolve('src/'),
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    }),
    new CopyPlugin([{ from: paths.publicPath, to: paths.outputPath }])
  ]
};
