const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'Loading'
    },
    externals: [{
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        },{
            test:/\.svg$/,
            use: 'raw-loader'
        }]
    }
}