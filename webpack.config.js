/**
 * Created by lu on 2016/12/5.
 */
const path = require('path');

const option = {
  entry: {
    inWorker: './src/main.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    libraryTarget: 'umd',
    library: "inWorker",
    umdNamedDefine: true,
    filename: "[name].js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      
      //,
      // {
      //   test: /\.worker\.js$/,
      //   use: {
      //     loader: 'worker-loader',
      //     options: {
      //       inline: false 
      //     }
      //   }
      // }
    ]
  },
  externals: {
   
  },
  plugins: []
};

module.exports = option;