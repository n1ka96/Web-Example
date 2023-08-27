
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: undefined,
        filename: "static/js/main.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "stylus-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    },
                },
                generator: {
                    filename: "static/images/[hash:10][ext][query]"
                }
            },
            {
                test: /\.(ttf|woff2?|map3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:10][ext][query]"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    devServer: {
        host: "localhost",
        port: "3000",
        open: true
    },
    mode: "development"
}