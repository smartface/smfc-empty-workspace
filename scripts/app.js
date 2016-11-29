/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	console.log('Hello World!');
	
	// // TODO: make this a noop code that just builds.
	
	// // TODO: test https://github.com/facebook/react/blob/master/src/renderers/noop/ReactNoop.js on a separate sandbox project.
	
	// // SmartFace core dependencies:
	// // Temporarily using `__smartface_npm__` as an alias for the smartface npm repository;
	// // this is just for the demonstration.
	// import { application, i18n } from '__smartface_npm__/@smartface/jscore';
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

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map