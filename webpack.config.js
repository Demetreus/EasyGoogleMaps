var webpack = require('webpack');
var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var plugins = minimize ? [new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    drop_console: true
  }
})] : [];

module.exports = {
  entry: {
    'dist/easygooglemaps':'./src/easygooglemaps.js'
  },
  output: {
    path: './dist',
    filename: minimize ? 'easygooglemaps.min.js' : 'easygooglemaps.js',
    libraryTarget: 'umd',
    library: 'EasyGoogleMaps'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: plugins
};
