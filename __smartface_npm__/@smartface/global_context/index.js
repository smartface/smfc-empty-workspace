/* global alert, Application */

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