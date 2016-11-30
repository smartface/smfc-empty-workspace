import { initialize as i18n } from '__smartface_npm__/@smartface/i18n';

// Localization setup:
// TODO: move this to a separate module.
import de from 'languages/de';
import fi from 'languages/fi';
import en from 'languages/en';
import tr from 'languages/tr';
const lang = i18n( [ de, fi, en, tr ] );

export default lang;