const join = require( 'path' ).join;
const validate = require( 'webpack-validator' );

module.exports = validate({
    entry: { app: join( __dirname, 'src/app.js' ) },
    output: { path: __dirname, filename: 'scripts/[name].js', pathinfo: false },
    resolve: {
        extensions: [ '', '.webpack.js', 'web.js', '.js', '.json' ],
        alias: { 'languages': join( __dirname, 'resources/i18n' ) }
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    plugins: []
}, {});
