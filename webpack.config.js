const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); //помогает работать с html-файлами и добавляет в них ссылку на бандл

module.exports = {
    entry: {
        path: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        port: 3300,
        client: {
            overlay: {
                errors: false,
                warnings: false,
            }
        }
    },

    module: {},
    plugins: [
        new HtmlPlugin({
            template: './public/index.html'
        })
    ]
}