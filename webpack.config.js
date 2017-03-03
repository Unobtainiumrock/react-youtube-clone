
var path = require('path');

module.exports = {
 entry: './src/index.tsx',
 output: {
   path: path.resolve(__dirname, 'dist'),
   publicPath: '/',
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },

     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },

     {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
     },

   ]
 },

 resolve: {
   extensions: [".tsx", ".ts", ".js", ".jsx"]
 },

 devtool: 'inline-source-map',
 
 devServer: {
    historyApiFallback: true,
    contentBase: './'
 }
};
