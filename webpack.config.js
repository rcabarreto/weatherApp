const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}


const config = {
  mode: process.env.NODE_ENV,
  entry: [
    'jquery',
    'popper.js',
    'bootstrap',
    './app/app.jsx'
  ],
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('./public'),
  },
  resolve: {
    modules: ["node_modules"],
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