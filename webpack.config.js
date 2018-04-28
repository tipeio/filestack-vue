const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/Filestack.vue',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'filestack-vue',
    umdNamedDefine: true
  },
  externals: {
    'vue-types': 'vue-types',
    'filestack-js': 'filestack-js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!less-loader!css-loader'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin( {
    //   minimize : true,
    //   sourceMap : false,
    //   mangle: true,
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
