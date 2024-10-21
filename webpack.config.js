const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = (env) => {

    return {
        mode: env.mode,
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
            historyApiFallback:{
                index:'/'
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
                    use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }],
                },
                {
                    test: /\.(jpg|png|webp)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: "./img/[name][ext]"
                    }
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: "./fonts/[name][ext]"
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                favicon: "",
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