var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/build',
    publicPath: 'build/',
    filename: 'bundle.js'
  },

  module: {
      rules: [
        {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },

      {
        test: /\.css$/,
        use: 'style-loader!css-loader!autoprefixer-loader',
        exclude: [/node-modules/, /public/],
      },

      {
        test: /\.gif$/,
        use: 'url-loader?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg$/,
        use: 'url-loader?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png$/,
        use: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.svg$/,
        use: 'url-loader?limit=10000&mimetype=image/svg'
      },

      {
        test: /\.json$/,
        use: 'json-loader',
      }
    ]
  }
}
