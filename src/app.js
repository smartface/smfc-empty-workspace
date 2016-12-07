/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

// #region smartface.io Runtime
import { mount } from '@volkan/smartface-core-device';
import React from 'react';
void React;
// #endregion

// #region smartface.io Components
// NOTE: temporarily importing from `_volkan` for development purposes; will move to `@volkan` when done.
import Application from './_volkan/smartface-component-application';
import Page from './_volkan/smartface-component-page';
import TextButton from './_volkan/smartface-component-text-button';
//import Image from '_volkan/smartface-component-image';
//import Image from '_volkan/smartface-component-label';
// #endregion

mount(
    <Application onStart={() => alert( 'smartface.io loves you!' )}>
        <Page key='page1'  fillColor='#eeeeee'onKeyPress={() =>{}} onShow={() => {}}>
            <TextButton
                parent='page1' key='btn' text='Click me!'
                left='15%' top='70%' height='10%' enableRipple={true}
                onClick={() =>{}}
            />
        </Page>
    </Application>
);

console.log( '\n\n*** Smartface app is up and running! ***\n\n' );

export default {};