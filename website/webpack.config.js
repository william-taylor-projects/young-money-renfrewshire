const webpack = require('webpack');
const prod = true;

module.exports = {
  context: __dirname,
  devtool: prod ? '': "inline-sourcemap",
  entry: "./scripts/app.js",
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
          presets: ['es2015', 'react'],
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: !prod ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false},
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
       'NODE_ENV': JSON.stringify('production')
      }
   })
  ]
};
