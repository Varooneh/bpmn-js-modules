var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bpmn.development.js',
        libraryTarget: 'var',
        library: 'bpm'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.bpmn$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                loader: 'file-loader',
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            }
        ]
    },
    mode: 'development',
    devtool: 'source-map',
    target: 'web'
};