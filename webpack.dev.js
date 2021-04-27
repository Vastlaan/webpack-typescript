const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            // test scss or sass files
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});
