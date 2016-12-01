import { initialize as i18n } from '@volkan/smartface-core-i18n';

// See ./resources/languages
import de from 'languages/de';
import fi from 'languages/fi';
import en from 'languages/en';
import tr from 'languages/tr';

const lang = i18n( [ de, fi, en, tr ] );

export default lang;
