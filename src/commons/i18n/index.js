import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  en_us,
  pt_br
} from './locales'

console.log(en_us)

const resources = {
  'en-US': {
    translation: en_us
  },
  'pt-BR': {
    translation: pt_br
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
