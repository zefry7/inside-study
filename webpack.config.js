const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = (env) => {

    return {
        mode: env.mode || "production",
        entry: {
            bundle: "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
            assetModuleFilename: 'assets/[name][ext]',
            clean: true,
        },
        devServer: {
            historyApiFallback: {
                index: '/'
            },
            port: "8080",
            open: true,
            liveReload: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(s[ac]|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|webp)$/,
                    type: 'asset/resource',
                    exclude: /node_modules/,
                    generator: {
                        filename: "./img/[name][ext]"
                    }
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    type: 'asset/resource',
                    exclude: /node_modules/,
                    generator: {
                        filename: "./fonts/[name][ext]"
                    }
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img/'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                favicon: "./public/main-logo.svg",
                template: __dirname + "/public/index.html",
            }),
            new MiniCssExtractPlugin(),
            // new CopyWebpackPlugin({
            //     patterns: [
            //         {
            //             from: 'public/img',
            //             to: "img"
            //         }
            //     ]
            // })
        ],
        resolve: {
            extensions: [".jsx", ".js"]
        }
    }
}