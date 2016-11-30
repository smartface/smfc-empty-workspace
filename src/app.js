
// #region Smartface Core Stub — Do not modify.

// Note: __smartface_npm__ is a temporary alias while I’m testing things;
// once it’s settled it’ll probably need to be moved to NPM under @smartface org.
import application from '__smartface_npm__/@smartface/application';
import { assertNotNull } from '__smartface_npm__/@smartface/test';
import { initialize as i18n } from '__smartface_npm__/@smartface/i18n';
import { whenContextReady } from '__smartface_npm__/@smartface/global_context';

let alert;
whenContextReady.then( ( context ) => { alert = context.alert; } );

// #endregion

// Localization setup:
// TODO: move this to a separate module.
import de from 'languages/de';
import fi from 'languages/fi';
import en from 'languages/en';
import tr from 'languages/tr';
const lang = i18n( [ de, fi, en, tr ] );

// #region Application

// Sanity checks:
assertNotNull( application, 'Application appers to not have been defined.' );
assertNotNull( lang, 'Problem with the localization setup.' );

const log = console.log;

application.on( 'start', ( err, data ) => {
    void err;

    alert( 'Application has started.' );
} );

log( `
    *** Smartface app is up and running! ***
` );

// #endregion