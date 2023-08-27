
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
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
        ],
    },
    plugins: [

    ],
    mode: "development"
}