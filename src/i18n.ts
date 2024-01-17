
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import  LanguageDetector  from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'sv',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        sv: {
            translation: {
                greeting: {
                    phrase:"Hej världen!"
            }
            }
        },
        en: {
            translation: {
                greeting: {
                    phrase:"Hello World!"
            }
        }
        }
    }
})

export default i18n