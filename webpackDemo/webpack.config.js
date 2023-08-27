
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/main.js",
        clearn: true
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
        ],
    },
    plugins: [

    ],
    mode: "development"
}