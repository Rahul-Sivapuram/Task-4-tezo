const path = require('path');
module.exports={
    mode:"development",

    entry: './src/index.ts',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module:{
        rules:[
            {
            test:/\.ts$/,
            exclude:/node_modules/,
            use:{
                loader:'ts-loader',
                }
            }
        ]
    },

    resolve:{
        extensions: ['.ts','.js']
    },

    devtool: 'source-map',

    devServer: {

        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,

    },
    
};