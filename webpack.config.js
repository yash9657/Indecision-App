//entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',  //this is the file that gets loaded and executed
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    //run babel whenever it encounters a js file
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
};

//loader - lets you customise the behaviour of webpack when it
//loads a given file