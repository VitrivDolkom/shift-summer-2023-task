import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ru: {
    translation: {
      poster_title: ' на сегодня'
    }
  },
  en: {
    translation: {
      poster_title: ' on today'
    }
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false
  }
})

export default i18next
