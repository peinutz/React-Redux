import webpack from 'webpack';
import path from 'path';

export default {
debug: true,
     devtool: 'cheap-module-eval-source-map',
 noInfo: false,
  entry: [
       'jquery',
          'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' //our file last
  ],
   target: 'web',
  output: {
 path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src' //tells the webserver where our code is
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })
  ],
  //Tell webpack the types of files we want to handle, with loaders(pre-processers, transpilers. last files have to do with boostrap files (fonts))
     module: {
        preLoaders: [
            // Bundle resource files
            { test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/, loader: "file-loader" },

            // Bundle stylesheets
            { test: /\.css$/, loader: "style-loader!css-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],
            loaders: [
      {test: /\.js$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
        
    }
};