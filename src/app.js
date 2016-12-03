/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

// #region Smartface core dependencies
import Application from '@volkan/smartface-component-application';
import { mount } from '@volkan/smartface-core-device';
import React from 'react';
// #endregion

const log = console.log;

/* eslint-disable no-alert */
mount(
    <Application onStart={() => alert( 'smartface.io loves you!' )} />
);
/* eslint-enable no-alert */

log( '\n\n*** Smartface app is up and running! ***\n\n' );
