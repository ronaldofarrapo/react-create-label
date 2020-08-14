const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    mode: 'development',
    devtool: 'source-map',
    
    entry: {
        label: './src/index.tsx'
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
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'Etiquetas',
        umdNamedDefine: true
    },

    plugins
};
