const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

try {
  envFile(path.join(__dirname, '.env'));
} catch (e) {
  console.log(e);
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('Compilation mode:', process.env.NODE_ENV);

const config = {
  mode: process.env.NODE_ENV,
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./public'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './app/template/index.html',
      title: 'App Title'
    }),
    new CleanWebpackPlugin(['public']),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        WEATHER_API_KEY: JSON.stringify(process.env.WEATHER_API_KEY),
        MAPS_API_KEY: JSON.stringify(process.env.MAPS_API_KEY),
        LOCATIONIQ_API_KEY: JSON.stringify(process.env.LOCATIONIQ_API_KEY)
      }
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
      actions: path.resolve(__dirname, 'app/actions/actions.jsx'),
      reducers: path.resolve(__dirname, 'app/reducers/reducers.jsx'),
      configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules', 'bower_components'],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-2']
            }
          }
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'images/'
          }
        },{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};


module.exports = config;