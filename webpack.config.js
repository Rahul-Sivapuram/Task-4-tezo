module.exports={
    mode:"development",

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
    devtool:false,
    
};