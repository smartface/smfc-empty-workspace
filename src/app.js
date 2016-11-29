// TODO: make this a noop code that just builds.

// SmartFace core dependencies:
// Temporarily using `__smartface_npm__` as an alias for the smartface npm repository; this is just for the demonstration.
import { application, i18n } from '__smartface_npm__/@smartface/jscore';
import { SERVER_ERROR, SIZE_OVERFLOW } from '__smartface-npm__/@smartface/jscore/constants';
import { alert } from '__smartface_npm__/@smartface/jscore/globals';

// Dependencies for the current application:
import { page1 } from './pages';

// Use `i18n.initialize()` factory method to create localizable assets:
const lang = i18n.initialize();

application.on( 'start', ( err, data ) => {
    void err;

    page1.show();
} );

application.on( 'error', ( err ) => { void err; } );

const isNetworkError = ( err ) => err.type === SERVER_ERROR || err.type === SIZE_OVERFLOW;

application.on( 'uncaughtException', ( err ) => {
    if ( isNetworkError( err ) ) {
        alert( lang.networkError );

        return;
    }

    alert( {
        title: lang.applicationError,
        message: `
            ${err.message}
            ${err.sourceURL}
            ${err.line}
            ${err.stack}
        `
    } );
} );


// TODO: test https://github.com/facebook/react/blob/master/src/renderers/noop/ReactNoop.js on a separate sandbox project.