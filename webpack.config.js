module.exports = {
  entry: './src/svg.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    library: 'ReactSVG',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
