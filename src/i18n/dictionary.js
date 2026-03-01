import { en } from './en';
import { tr } from './tr';
import { sq } from './sq';

const dictionaries = {
    en: en,
    tr: tr,
    sq: sq,
};

export const getDictionary = (locale) => dictionaries[locale] || dictionaries.en;
export const locales = ['en', 'tr', 'sq'];
export const defaultLocale = 'en';
