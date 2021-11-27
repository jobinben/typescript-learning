const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // 配置后缀名
        // 如果用了devServer的话, 需要把用到的引用文件都加上他们的后缀名，不然无法加载到
        // 因为我的index.html引用的是打包后的js文件
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            // 配置为我们自己的模板
            template: './index.html'
        })
    ]

}