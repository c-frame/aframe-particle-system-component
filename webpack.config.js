// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    context: __dirname,
    entry: './index.js',
    externals: {
        // Stubs out `import ... from 'three'` so it returns `import ... from window.THREE` effectively using THREE global variable that is defined by AFRAME.
        three: 'THREE'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? "aframe-particle-system-component.min.js" : "aframe-particle-system-component.js"
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        static: { directory: path.join(__dirname), },
        compress: true,
        port:  process.env.PORT || 8000,
        devMiddleware: { publicPath: '/dist' },
        watchFiles: ['index.html', 'lib/SPE.js', 'examples/**/index.html'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
