
// #region Smartface Core Stub — Do not modify.

// Note: __smartface_npm__ is a temporary alias while I’m testing things;
// once it’s settled it’ll probably need to be moved to NPM under @smartface org.
import application from '__smartface_npm__/@smartface/application';

// The below comented-out code is not necessary.
// I added it just to show how device-to-js global context wiring can be done.
//
// import { whenContextReady } from '__smartface_npm__/@smartface/global_context';
// let alert;
// whenContextReady.then( ( context ) => { alert = context.alert; } );
//
// This one is not necesary either; added it just to show how we can enable assertions:
//
// import { assertNotNull } from '__smartface_npm__/@smartface/test';
// assertNotNull( application, 'Application appers to not have been defined.' );

// #endregion

// #region Application

const log = console.log;

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