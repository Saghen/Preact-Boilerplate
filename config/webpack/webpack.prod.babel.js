import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import paths from './paths';

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(
      { cleanOnceBeforeBuildPatterns: [paths.outputPath.split('/').pop()] },
      {
        root: paths.root
      }
    ),
    new BundleAnalyzerPlugin()
  ],
  devtool: 'source-map'
};
