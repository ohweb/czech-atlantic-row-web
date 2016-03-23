const webpack = require('webpack');
const path = require('path');


// require all the neede plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;


// set up the default Webpack config
var webpackConfig = {

  debug : true,

  devtool : 'cheap-module-eval-sourcemap',


  // Entry point to the bundle - our application
  entry : {
    'polyfills' : path.join(__dirname, 'src', 'polyfills.ts'),
    'vendor'    : path.join(__dirname, 'src', 'vendor.ts'),
    'main'      : path.join(__dirname, 'src', 'main.ts')
  },


  // Options affecting the resolving of modules.
  // See: http://webpack.github.io/docs/configuration.html#resolve
  resolve : {

    // Contains directories with our modules
    // See: https://webpack.github.io/docs/configuration.html#resolve-root
    root : [path.join(__dirname, 'src')],

    // Array of filename extensions that will be used to resolve modules.
    // E.g.: To be able to use require('vetrnik') to load vetrnik.js, one has to specify '.js'
    // See: http://webpack.github.io/docs/configuration.html#resolve
    extensions : ['', '.ts', '.js']
  },


  // Options affecting the output of the compilation.
  // See: http://webpack.github.io/docs/configuration.html#output
  output : {

    path              : path.join(__dirname, 'dist'), // Output directory as an absolute path (required)
    filename          : '[name].bundle.js', // Specifies the name of each output file on disk.
    sourceMapFilename : '[name].map', // The filename of the SourceMaps for the JavaScript files.
    chunkFileName     : '[id].chunk.js' // The filename of non-entry chunks.

  },


  // Options affecting the normal modules
  // See: http://webpack.github.io/docs/configuration.html#module
  module : {

    // An array of automatically applied loaders.
    loaders : [

      // TypeScript loader support for .ts and Angular2 async router via .async.ts
      // TODO: zjistit co to sakra jsou async routes :)
      //
      // See: https://github.com/s-panferov/awesome-typescript-loader
      {
        test    : /\.ts$/,
        loader  : 'awesome-typescript-loader',
        exclude : [/\.(spec|e2e)\.ts$]/]
      },

      // SASS Loader for .scss files
      // See: https://github.com/jtangelder/sass-loader
      {
        test    : /\.scss$/,
        loaders : ['raw-loader', 'sass-loader']
      },

      // HTML loader support for *.html files
      // Returns file contents as a string. Resolves all `src="..."` attributes
      // as `require('...')`
      //
      // See: https://github.com/webpack/html-loader
      {
        test    : /\.html$/,
        loader  : 'html-loader',
        exclude : ['./src/index.html']
      },

      // File loader for JPGs and PNGs
      // TODO: S tímhle si ještě pohrajeme. Nastavíme načítání data-src atd.
      //
      // See: https://github.com/webpack/file-loader
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      }
    ]
  },


  // Adding additional plugins to the compiler.
  plugins : [

    // ## ForkCheckerPlugin
    // Description: Do type checking in a separate process, so webpack don't need to wait.
    // See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
    new ForkCheckerPlugin(),

    // Plugin: CommonsChunkPlugin
    // Description: Shares common code between the pages.
    // It identifies common modules and put them into a commons chunk.
    //
    // See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    // See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
    new webpack.optimize.CommonsChunkPlugin({
      name      : ['main', 'vendor', 'polyfills'],
      minChunks : Infinity
    }),


    // ## HtmlWebpackPlugin
    // Simplifies the creation of HTML file to serve the webpack bundles.
    // See: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template      : path.join(__dirname, 'src', 'index.html'),
      chunkSortMode : 'none'
    })

  ],


  // Webpack Development Server configuration
  devServer : {
    host               : 'localhost',
    port               : 3000,
    historyApiFallback : true,
    watchOptions       : {
      aggregateTimeout : 300,
      poll             : 1000
    }
  },


  // Including pollyfils and mocks for various node stuff.
  // Why? IDK. Nobody seems to know why.  :-)
  // TODO: Find out why.
  node : {
    global         : 'window',
    process        : true,
    crypto         : 'empty',
    module         : false,
    clearImmediate : false,
    setImmediate   : false
  }

};


module.exports = webpackConfig;