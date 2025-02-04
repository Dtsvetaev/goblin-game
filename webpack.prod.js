const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  
  mode: "development",
  
  
  devtool: "inline-source-map",

 
  devServer: {
    static: "./dist",              
    historyApiFallback: true,     
    open: true,                   
    compress: true,               
    hot: true,                   
    port: 8080,                   
  },

  plugins: [
    
    new webpack.HotModuleReplacementPlugin(),
  ],
});

