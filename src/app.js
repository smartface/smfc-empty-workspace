
// Smartface core dependencies.
//
// Note: __smartface_npm__ is a temporary alias while I’m testing things;
// once it’s settled it’ll probably need to be moved to NPM under @smartface org.
import application from '__smartface_npm__/@smartface/application';
import { assertNotNull } from '__smartface_npm__/@smartface/test';
import { initialize as i18n } from '__smartface_npm__/@smartface/i18n';
import { log } from '__smartface_npm__/@smartface/console';
import { alert } from '__smartface_npm__/@smartface/global_context';

// Localization setup:
import de from 'languages/de';
import fi from 'languages/fi';
import en from 'languages/en';
import tr from 'languages/tr';
const lang = i18n( [ de, fi, en, tr ] );

// Application dependencies:
// none so far.

// Sanity checks:
assertNotNull( application, 'Application appers to not have been defined.' );
assertNotNull( lang, 'Problem with the localization setup.' );

// Application code below:

application.on( 'start', ( err, data ) => {
    void err;

    alert( 'Application has started.' );
} );

log( `
    *** Smartface app is up and running! ***
` );
