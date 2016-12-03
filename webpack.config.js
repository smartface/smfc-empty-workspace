/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

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

            // Exclude all node modules that are not inside the @volkan org.
            { test: /\.js$/, loader: 'babel', exclude: /node_modules(?!\/@volkan)/ },
            { test: /\.json$/, loader: 'json' }
        ]
    },
    plugins: []
}, {});
