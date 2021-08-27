
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./assets/"),
        filename: "./js/bundle.js"
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "./css/styles.css"
        })
      ],
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: [
                MiniCSSExtractPlugin.loader,
                "css-loader", "postcss-loader",
                "sass-loader",
            ],
            },
        ],
    }
}