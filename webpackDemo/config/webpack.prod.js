const os = require("os");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const threads = os.cpus().length;

function getStyleLoader(pre) {
    return [
        MiniCssExtractPlugin.loader, 
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env",
                    ]
                }
            }
        },
        pre,
    ].filter(Boolean);
}

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/main.js",
        chunkFilename: 'static/js/[name].ckunk.js',
        assetModuleFilename: "static/media/[hash:10][ext][query]",
        clean: true
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: getStyleLoader()
                    },
                    {
                        test: /\.less$/,
                        use: getStyleLoader("less-loader")
                    },
                    {
                        test: /\.s[ac]ss$/,
                        use: getStyleLoader( "sass-loader")
                    },
                    {
                        test: /\.styl$/,
                        use: getStyleLoader("stylus-loader")
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp|svg)$/,
                        type: "asset",
                        parser: {
                            dataUrlCondition: {
                                maxSize: 10 * 1024
                            },
                        },
                        // generator: {
                        //     filename: "static/images/[hash:10][ext][query]"
                        // }
                    },
                    {
                        test: /\.(ttf|woff2?|map3|map4|avi)$/,
                        type: "asset/resource",
                        // generator: {
                        //     filename: "static/media/[hash:10][ext][query]"
                        // }
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        // include: path.resolve(__dirname, "../src"),
                        use: [
                            {
                                loader: "babel-loader",
                                options: {
                                    cacheDirectory: true,
                                    cacheCompression:false
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
        new MiniCssExtractPlugin({
            // filename: "static/css/main.css"
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].chunk.[contenthash:10].css"
        }),
        // new CssMinimizerPlugin(),
        // new TerserWebpackPlugin({
        //     parallel: threads
        // }),
        new PreloadWebpackPlugin({
            // rel: 'preload',
            // as: 'script'
            rel: 'prefetch'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin({
                parallel: threads
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminGenerate,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        "preset-default",
                                        "prefixIds",
                                        {
                                            name: "sortAttrs",
                                            params: {
                                                xmlnsOrder: "alphabetical",
                                            }
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        },
        // runtimeChunk: {
        //     name: entrypoint => `runtime~${entrypoint.name}.js`
        // }
    },
    devtool: "source-map",
    mode: "production"
}