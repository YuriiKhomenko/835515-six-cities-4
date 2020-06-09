const path = require(`path`);
const joinedPath = path.join(__dirname, `public`)

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: joinedPath
  },
  devServer: {
    contentBase: joinedPath,
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};
