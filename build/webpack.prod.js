const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    optimization: {
        // css压缩
        minimizer: [new optimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: [
        // 将CSS提取到单独的文件中
        new miniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ]
}

module.exports = merge(baseConfig, prodConfig)