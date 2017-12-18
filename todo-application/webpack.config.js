var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
        entry: __dirname+'/resorce/front/index.js',
    output: {
        path: __dirname+"/web/bundle",
        publicPath : '/',
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDoList',
            filename: '/index.html',
            template: './web/index.html'
        })],
    devServer: {
        inline: true,
        contentBase: "./web/bundle",
        port: 8853
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    }
};