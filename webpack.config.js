// function getDevTool() {
//     if (process.env.NODE_ENV !== 'production') {
//         return 'source-map'; //enables source map
//     }
    
//     return false; 
// }

module.exports = {
    entry:'./app/index.js',
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2'], 
                    plugins: ['transform-decorators-legacy', 'react-hot-loader/babel']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]

    }
};