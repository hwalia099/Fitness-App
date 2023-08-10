import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import frTranslation from './translations/fr.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language here
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (languageCode) => {
  i18n.changeLanguage(languageCode);
};

export default i18n;
