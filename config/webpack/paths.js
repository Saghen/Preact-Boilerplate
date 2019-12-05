import path from 'path';

export default {
  root: path.resolve(__dirname, '../', '../'),
  publicPath: path.resolve(__dirname, '../', '../', 'public'),
  outputPath: path.resolve(__dirname, '../', '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', '../', 'src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
