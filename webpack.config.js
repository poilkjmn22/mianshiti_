const path = require('path');
const PUBLIC_PATH = '/dist/';
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
      index: './src/index.js'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.s(c|a)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    // optimization: {
    //   minimizer: [new UglifyjsPlugin({
    //         uglifyOptions: {
    //             compress: {
    //                 // 删除所有的 `console` 语句，可以兼容ie浏览器
    //                 drop_console: true,
    //                 // 内嵌定义了但是只用到一次的变量
    //                 collapse_vars: true,
    //                 // 提取出出现多次但是没有定义成变量去引用的静态值
    //                 reduce_vars: true
    //             }
    //         },
    //         extractComments: true
    //     })],
    // },
    plugins: [],
    resolve: {
        mainFields: ['jsnext:main', 'module', 'main'],
        alias: {
            Components: './components',
            '@': path.resolve(__dirname, '.')
        },
        extensions: ['.js', '.vue', '.json', 'scss'],
        modules: ['node_modules']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: PUBLIC_PATH
    },
    externals: {},
    devServer: {
        publicPath: PUBLIC_PATH,
        compress: false,
        port: 9099,
        before: function(app, server) {

        }
    }
};
