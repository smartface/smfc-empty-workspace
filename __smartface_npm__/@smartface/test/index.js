const assertNotNull = ( test, message ) => {
    if ( test === null || test === undefined ) {
        throw new Error( `[AssertionError] assertNotNull: ${message}` );
    }

    return;
};

export { assertNotNull };