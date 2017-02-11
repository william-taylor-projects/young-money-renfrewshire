const webpack = require('webpack');
const prod = true;

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: ['whatwg-fetch', './scripts/app.js' ],
  output: {
    path: __dirname + "/build",
    filename: "app.min.js"
  },
  module : {
    loaders: [
      {
        test   : /.js$/,
        loader : 'babel-loader',
        query: {
          compact: false,
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: !prod ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
       'NODE_ENV': JSON.stringify('production')
      }
   }),
   new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
  ]
};
