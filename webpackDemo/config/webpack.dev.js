const os = require("os");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const threads = os.cpus().length;

module.exports = {
    entry: "./src/main.js",
    output: {
        path: undefined,
        filename: "static/js/main.js",
    },
    module: {
        rules: [
            {
                oneOf: [
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
                        // include: path.resolve(__dirname, "../src"),
                        // loader: "babel-loader",
                        use: [
                            {
                                loader: "babel-loader",
                                options: {
                                    cacheDirectory: true,
                                    cacheCompression:false,
                                    plugins: ["@babel/plugin-transform-runtime"]
                                }
                            },
                            {
                                loader: 'thread-loader',
                                options: {
                                    works: threads,
                                }
                            }
                        ],
                    },
                ]
            }
        ],
    },
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            threads,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintcache'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
        hot: true
    },
    devtool: "cheap-module-source-map",
    mode: "development"
}