/*global Application*/

const noop = () => {};

const successCallbacks = [];
const errorCallbacks = []

if ( typeof Application !== 'undefined' ) {
    Application.onStart = ( evt ) => {
        successCallbacks.forEach( ( callback ) => callback( null, true ) );

        successCallbacks.length = 0;
    };

    Application.onError = ( error ) => {
        errorCallbacks.forEach( ( callback ) => callback( error ) );

        errorCallbacks.length = 0;
    };
}

const eventRegistry = {
    start: (callback) => successCallbacks.push(callback),
    error: (callback) => errorCallbacks.push(callback)
};

/**
 *  A Façade around `Application` to make it bind to multiple event handlers.
 */
const application = {
    on: ( evt, callback ) => ( eventRegistry[ evt ] || noop )( callback )
};

export default application;
