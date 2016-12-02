
// #region Smartface core dependencies:
// TODO: move this to its own repository:
import Application from './smartface/components/Application';
// TODO: move this to its own repository:
import { mount } from './smartface/device';
// #endregion

const log = console.log;

mount(
    <Application onStart={() => alert( 'Application has started' )} />
);

log( '\n\n*** Smartface app is up and running! ***\n\n' );
