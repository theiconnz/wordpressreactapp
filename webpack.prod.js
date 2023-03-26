const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlMinimizerPlugin()
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CompressionPlugin({algorithm: "gzip",}),
        new Dotenv({
            systemvars: true
        })
    ]
});