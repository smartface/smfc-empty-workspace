/* global alert, Application */

const noop = () => {};
const alert = typeof alert !== 'undefined' ? alert : noop;

const whenContextReady = new Promise( ( resolve, reject ) => {
    const resolveWithContext = () => {
        resolve( { alert } );
    };

    if ( typeof alert !== 'undefined' ) {
        resolveWithContext();

        return;
    }

    const id = setInterval( () => {
        if ( typeof alert === 'undefined' ) { return; }

        clearInterval( id );
        resolveWithContext();
    }, 100 );
} );

export { whenContextReady };