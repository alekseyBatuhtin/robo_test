const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(`${__dirname}/..`);
const bookApiUrl = 'https://www.googleapis.com';
const searchApiUrl = 'http://suggestqueries.google.com';

const config = {
  cache: true,
  entry: {
    app: `${rootDir}/src/core/app.js`
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    path: `${rootDir}/dist`,
    publicPath: '/'
  },
  resolve: {
    modules: [
      `${rootDir}/src`,
      `${rootDir}/node_modules`
    ] /* ,
    alias: {
      fonts: `${rootDir}/core/styles/fonts`
    } */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?cacheDirectory=true'
      },
      {
        test: /\.css$/,
        exclude: /(components\/ui\/ui\/src)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('postcss-import')(), require('postcss-cssnext')()]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /(components\/ui\/ui\/src)/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('postcss-import')(), require('postcss-cssnext')()]
            }
          }
        ]
      },
      { test: /\.(jpg|png|gif)$/, loader: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: getPlugins(),
  devServer: {
    contentBase: `${rootDir}/dist`,
    noInfo: false,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/books/v1/volumes': {
        target: bookApiUrl,
        changeOrigin: true
      },
      '/complete/search': {
        target: searchApiUrl,
        changeOrigin: true
      }
    }
  }
};

module.exports = config;

function getPlugins() {
  const ret = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootDir}/src/core/index.html`,
      inject: 'body' /* ,
      favicon: `${rootDir}/src/core/favicon.png` */
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ];

  return ret;
}
