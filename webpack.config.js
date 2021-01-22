const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src"),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib'),
    },
    plugins: [
        new HtmlWebpackPlugin({
           template:"./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"),
        open: true,
        port:3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader"
                }
            }
        ]
    }
    
}