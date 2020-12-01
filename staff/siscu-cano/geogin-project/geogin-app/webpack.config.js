const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            publicPath: path.join(__dirname, 'dist'),
            open: true
        },
        plugins: [
                new HtmlWebpackPlugin({
                        template: 'src/index.html'
                })
        ],
        module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env', 
                                    '@babel/preset-react'
                                ]
                            }
                        }
                    }
                ]
            }
}