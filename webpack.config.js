const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let plugins = [];

plugins.push(
    new MiniCssExtractPlugin({
        filename: '[name]/[name].css',
    })
);

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    
    entry: {
        label: './src/index.tsx'
    },

    module: {
        rules: [
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            {
                test: /\.(sa|sc|c)ss$/, 
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                    'sass-loader',
                  ],
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, '_bundles'),
        libraryTarget: 'umd',
        library: 'Etiquetas',
        umdNamedDefine: true
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                include: /\.min\.js$/,
                sourceMap: true          
            })
        ]
    },

    plugins
};
