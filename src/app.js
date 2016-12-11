/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

import { mount } from 'badem/dist/js';
import store from '@volkan/smartface-component-store';
import config from './app.config.js';

const log = console.log;

mount( store, config )
    .then( () => {
        // TODO: the mounter should use the `landingePage` attribute implicitly instead.
        global.Pages.FirstPage.show();
        
        log( '\n\n*** Smartface app is up and running !!! ***\n\n' );
    } ).catch( ( ex ) => {
        log( '\n\n*** There is a problem. ***\n\n' );
        log( JSON.stringify( ex ) );
    } );   

export default {};
