
/*
 * Smartface core dependencies.
 *
 * __smartface_npm__ is a temporary alias while I’m testing things;
 * once it’s settled it’ll probably need to be moved to NPM under @smartface org.
 */
import application from '__smartface_npm__/@smartface/application';
import { assertNotNull } from '__smartface_npm__/@smartface/test';
import { initialize as initializeI18n } from '__smartface_npm__/@smartface/i18n';
import { log } from '__smartface_npm__/@smartface/console';

/*
 * Application dependencies.
 */
import * as dictionaries from './i18n';

const lang = initializeI18n( dictionaries );

assertNotNull( application );
assertNotNull( lang );

log( 'Demo application is up and running!' );

