import { useTranslation } from 'react-i18next'

import s from './styles.module.css'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div className={s.select}>
      <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  )
}
