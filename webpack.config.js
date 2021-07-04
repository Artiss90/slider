const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {rules: [ {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
        test: /\.js$/,
        exclude: /node_modules/,
    use: {
      loader: "babel-loader",
 }
  }]},
  devServer: {
    port: 9000,
    open: true,
    stats: 'errors-only'
  },
};