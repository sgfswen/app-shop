module.exports = {
  entry: './app/js/main.js',
  output: {
        path: __dirname + '/dist/',
        publicPath: "/dist/",
        filename: '[name].bundle.js'
    },
  module: {
    loaders:[
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }
    ]
  }
};
