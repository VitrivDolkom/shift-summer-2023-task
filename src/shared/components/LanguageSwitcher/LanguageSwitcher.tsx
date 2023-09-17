import { Translation } from 'react-i18next'

import s from './styles.module.css'

export const LanguageSwitcher = () => (
  <Translation>
    {(_t, { i18n }) => (
      <div className={s.select}>
        <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
    )}
  </Translation>
)
