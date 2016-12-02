import application from '@volkan/smartface-core-application';

import React from 'react';

const Application = ( { onStart, onError } ) => {
    application.on( 'start', onStart );
    application.on( 'error', onError );
    
    return null;
};

export default Application;
