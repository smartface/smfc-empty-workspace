/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

import { initialize as i18n } from '@volkan/smartface-core-i18n';

// See ./resources/i18n
import de from 'languages/de';
import fi from 'languages/fi';
import en from 'languages/en';
import tr from 'languages/tr';

const lang = i18n( [ de, fi, en, tr ] );

export default lang;
