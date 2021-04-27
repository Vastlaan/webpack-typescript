const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",

    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader", //1. Turns sass into css
                ],
            },
        ],
    },
});
