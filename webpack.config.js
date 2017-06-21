const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './dist',
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}