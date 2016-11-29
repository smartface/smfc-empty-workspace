const webpack = require( 'webpack' );
const join = require( 'path' ).join;
const validate = require( 'webpack-validator' );

module.exports = validate({
    entry: {
        app: join( __dirname, 'src/app.js' )
    },
    output: {
        path: __dirname,
        filename: 'scripts/[name].js',
        pathinfo: false
    },
    resolve: {
        alias: {

            // TODO: temporary hack
            '__smartface_npm__': join(__dirname, '__smartface_npm__')
        }
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /vendor|node_modules|bower_components/}
        ]
    },
    plugins: []
}, {});
