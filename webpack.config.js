const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    watchFiles: ['./app/**/*.html'],
    static: {
      directory: path.join(__dirname, 'app'),
    },
    compress: true,
    hot: true,
    port: 3000,
    allowedHosts: 'all',
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', {loader: 'postcss-loader',
         options:
         {
          postcssOptions: {
            plugins: [
              'postcss-import',
              'postcss-mixins',
              'postcss-simple-vars',
              'postcss-nested',
              'postcss-hexrgba',
              'autoprefixer'
            ]
          }
         }}]
      }
    ]
  }
}
