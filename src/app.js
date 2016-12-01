
// #region Smartface Core Stub — Do not modify.

// Note: __smartface_npm__ is a temporary alias while I’m testing things;
// once it’s settled it’ll probably need to be moved to NPM under @smartface org.
import application from '__smartface_npm__/@smartface/application';

// #endregion

// #region Application

const log = console.log;
const alert = global.alert;

application.on( 'start', ( err, data ) => {
    if ( err ) {

        // Contrary to the popular myth, the below is the actual phrase Apollo astronauts used:
        alert( 'Houston, we’ve had a problem.' );
    }

    alert( 'Application has started.' );
} );

log( `
    *** Smartface app is up and running! ***
` );

// #endregion