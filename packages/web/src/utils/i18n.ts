
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langsEN from "../locales/en.json"
import langsPT from "../locales/pt.json"

i18n.use(initReactI18next).init({

    resources: {
        en: {
            ...langsEN
        },
        pt: {
            ...langsPT
        },
    },

    lng: 'en',
})