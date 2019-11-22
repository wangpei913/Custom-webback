/**
 * 开发环境
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8099,
        hot: true,//启用webpack的热模块替换功能
        //hotOnly: true&emsp;
        //devServer.hot在没有页面刷新的情况下启用热模块替换作为构建失败时的后备
    }
}

module.exports = merge(baseConfig, devConfig);