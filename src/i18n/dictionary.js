import { en } from './en';
import { tr } from './tr';
import { sq } from './sq';
import { et } from './et';
import { lv } from './lv';
import { id } from './id';
import { pt } from './pt';
import { es } from './es';

// Central language registry — add new languages here
export const languageRegistry = {
    en: { dict: en, flag: '🇬🇧', name: 'English', ogLocale: 'en_US' },
    tr: { dict: tr, flag: '🇹🇷', name: 'Türkçe', ogLocale: 'tr_TR' },
    sq: { dict: sq, flag: '🇦🇱', name: 'Shqip', ogLocale: 'sq_AL' },
    et: { dict: et, flag: '🇪🇪', name: 'Eesti', ogLocale: 'et_EE' },
    lv: { dict: lv, flag: '🇱🇻', name: 'Latviešu', ogLocale: 'lv_LV' },
    id: { dict: id, flag: '🇮🇩', name: 'Bahasa Indonesia', ogLocale: 'id_ID' },
    pt: { dict: pt, flag: '🇧🇷', name: 'Português', ogLocale: 'pt_BR' },
    es: { dict: es, flag: '🇪🇸', name: 'Español', ogLocale: 'es_ES' },
};

export const locales = Object.keys(languageRegistry);
export const defaultLocale = 'en';

export const getDictionary = (locale) => languageRegistry[locale]?.dict || languageRegistry.en.dict;
export const getOgLocale = (locale) => languageRegistry[locale]?.ogLocale || 'en_US';
