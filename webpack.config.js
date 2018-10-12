//basic wars
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//additional plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//module settings
module.exports = {
    mode: 'none',
    //базовый путь к проэкту
    context: path.resolve(__dirname, 'src'),

    //точка входу src
    entry: './src/app.js',
    //основной файл приложения

    //Путь для собраных файлов
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/main.js',
    },


    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '',
                }
            },
            ],
        },
            {
                // ASSET LOADER
                test: /\.(woff|woff2|ttf|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '',
                    }
                },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                    }, {
                        loader: 'sass-loader',
                    }],
            },
        ],
    },


    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],

};

