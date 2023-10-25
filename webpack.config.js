const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
      index: './src/mainPage/mainPage.js',
      products: './src/products/products.js',
      about: './src/about/about.js'
    },


    output: {
      path: path.resolve(__dirname, 'dist'),

      filename: "[name].js",
    },
    module: {
      rules:[
        {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
           "css-loader",
           "sass-loader",
        ],
      },
        
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './src/mainPage/index.html',
        filename: 'index.html',
        chunks: ['index'],
      }),
     
      new HtmlWebpackPlugin({
        inject: true,
        template: './src/products/products.html',
        filename: 'products.html',
        chunks: ['products'],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: "./src/about/about.html",
        filename: "about.html",
        chunks: ["about"],
      })
    ],
  };