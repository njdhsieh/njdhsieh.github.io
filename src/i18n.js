import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'

i18n.use(initReactI18next).init({
  resources: {
    en:   { translation: en },
    zhTW: { translation: zhTW },
  },
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
