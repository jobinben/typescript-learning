# typescript-learning
记录学习typescript的日常


# 运行环境配置
<p>首先是要安装我们的typescript编译器 tsc</p>
```shell
npm i typescript -g
```
<p>安装成功后,就可以查看tsc编译器的版本</p>
```shell
tsc --version
```
<p>平时练习用的是tsc把ts文件转换为js文件，然后进行运行js文件</p>
<p>如果多文件的情况下，用以下两种方式运行</p>

## 在node环境下运行ts文件

<p>依赖我们的`ts-node`包，通过ts-node运行ts文件，不过运行之前，ts-node还需要依赖两个包: `tslib` 和 `@types/node`</p>

```cmd
npm i ts-node tslib @types/node -g
```

## 用webpack进行配置ts

<p>我们需要安装加载ts文件的 ts-loader， ts-loader依赖typescript的编译 所以要再安装typescript</p>
```shell
npm i ts-loader typescript -D
```
<p>在打包ts之前，ts还需要依赖一个配置文件tsconfig.json文件</p>
<p>使用以下命令，可以生成一个初始化配置文件</p>
```shell
tsc --init
```

我们的webpack配置文件内容:
```js
const path = require("path")

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // 配置后缀名
        extensions: ['.ts']
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}
```
<p>现在一个简单的ts配置就完成啦~ </p>
<p>接着就可以打包我们的ts然后运行在我们的chrome上啦</p>


## webpack-dev-server使用注意

我们用webpack-dev-server打包运行时，打包后的文件是存放在内存中的，我们在浏览器输入ip后，
读取的文件是在内存中的，所以我们不需要webpack打包后的dist文件目录下的文件。我们可以把dist文件目录下的文件删掉，
不然在chrome浏览器上会报一个404，找不到dist的文件。

