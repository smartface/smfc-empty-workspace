* Play with ReactNoop and see if you can use the components and send events back and forth withouth DOM.
* `npm run build`

<!--
ADD: eslint and other static analysis.

// import { SERVER_ERROR, SIZE_OVERFLOW } from '__smartface-npm__/@smartface/jscore/constants';
// import { alert } from '__smartface_npm__/@smartface/jscore/globals';

// // Dependencies for the current application:
// import { page1 } from './pages';

// // Use `i18n.initialize()` factory method to create localizable assets:
// const lang = i18n.initialize();

// application.on( 'start', ( err, data ) => {
//     void err;

//     page1.show();
// } );

// application.on( 'error', ( err ) => { void err; } );

// const isNetworkError = ( err ) => err.type === SERVER_ERROR || err.type === SIZE_OVERFLOW;

// application.on( 'uncaughtException', ( err ) => {
//     if ( isNetworkError( err ) ) {
//         alert( lang.networkError );

//         return;
//     }

//     alert( {
//         title: lang.applicationError,
//         message: `
//             ${err.message}
//             ${err.sourceURL}
//             ${err.line}
//             ${err.stack}
//         `
//     } );
// } );

// // TODO: test https://github.com/facebook/react/blob/master/src/renderers/noop/ReactNoop.js on a separate sandbox project.

// const DummyComponent = () => (<p>Hello</p>);

// const SillyComponent = () => (<p>World</p>);

// const createRenderer = () => TestUtils.createRenderer();

// try {
//     const osman = createRenderer();
    
//     const renderMe = osman.render;

//     let flip = false;

//     setInterval(() => {
//         flip = !flip;
        
//         if (flip) {
//             osman.render(<DummyComponent />);                    
//         } else {
//             osman.render(<SillyComponent />);                                
        
//         }
//         const result = osman.getRenderOutput();
//         alert( 'rendered a dummy react component ' + JSON.stringify(result) );
//     }, 1000);


// } catch (ex) {
//     console.log(ex);
//     alert(ex);
// }

// application.on( 'start', ( err, data ) => {
//     void data;

//     if ( err ) {

//         // Contrary to the popular myth, the below is the actual phrase Apollo astronauts used:
//         alert( 'Houston, we’ve had a problem.' );
//     }

//     alert( 'Application started 7.' );
// } );

// log( `
//     *** Smartface app is up and running! ***
// ` );

-->


