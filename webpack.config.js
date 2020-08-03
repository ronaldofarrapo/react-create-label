const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

let plugins = [];

plugins.push(
    new MiniCssExtractPlugin({
        filename: '[name]/[name].css',
    })
);

plugins.push(
    new CleanWebpackPlugin({verbose: true})
);

module.exports = {
    entry: {
        index: './src/index.tsx',
        lista: './src/label/Lista.tsx'
    },

    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: '[name]/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins
};
