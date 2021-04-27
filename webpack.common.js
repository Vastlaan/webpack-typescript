const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
    entry: "./src/index.ts",

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            // test for .ejs files
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: "ejs-loader",
                        options: {
                            esModule: false,
                            variable: "data",
                        },
                    },
                ],
            },

            // assets
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(
                    __dirname,
                    "./node_modules/bootstrap-icons/font/fonts"
                ),
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "webfonts",
                        publicPath: "./webfonts",
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/index.ejs",
            filename: "index.html",
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, "./src/partials/navigation.ejs"),
            location: "nav",
            template_filename: ["index.html"],
        }),
    ],
};
