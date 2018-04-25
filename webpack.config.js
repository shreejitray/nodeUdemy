/**
 * Created by schaud3 on 11/12/17.
 */
const path = require('path');

const config = {
    context: `${__dirname}/public`,
    entry: path.resolve(__dirname, 'public', 'main.js'),
    output: {
        filename: 'main.bundle.js',
        path: `${__dirname}/public`
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'ngtemplate-loader',
                    'html-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
}

module.exports = config;