
// #region Smartface core dependencies:

    import application from '@volkan/smartface-core-application';

// #endregion

// #region Application

    const log = console.log;
    const alert = global.alert;

    application.on( 'start', ( err, data ) => {
        void data;

        if ( err ) {

            // Contrary to the popular myth, the below is the actual phrase Apollo astronauts used:
            alert( 'Houston, we’ve had a problem.' );
        }

        alert( 'Application started.' );
    } );

    log( `
        *** Smartface app is up and running! ***
    ` );

// #endregion
