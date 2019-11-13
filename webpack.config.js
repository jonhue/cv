const path = require('path');

module.exports = {
  entry: './src/cv.js',
  output: {
    filename: 'cv.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(otf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './dist',
            },
          }
        ],
      },
    ],
  },
};
