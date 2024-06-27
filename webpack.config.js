const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); //создает html-файл и добавляет в него ссылку на бандл

module.exports = {
    entry: {
        path: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {},
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
}