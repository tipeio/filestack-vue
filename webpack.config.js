const webpack = require('webpack');
const path = require('path');

var ROOT = path.resolve(__dirname)
var root = path.join.bind(path, ROOT)

const create = (filename, output, external) => {
  return {
    entry: './src/Filestack.vue',
    output: {
      path: output,
      filename: filename,
      libraryTarget: 'umd',
      library: 'filestack-vue',
      umdNamedDefine: true
    },
    externals: {
      'filestack-js': external
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
  }
}
module.exports = [
  create('index.js', root('./dist'), 'filestack-js'),
  create('filestack-vue.js', root('./example'), 'filestack')
];
