import { useTranslation } from 'react-i18next'

import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <Button
      type="submit"
      styleType="solid"
      className={s.lngBtn}
      onClick={() => {
        if (i18n.language === 'ru') i18n.changeLanguage('en')
        else i18n.changeLanguage('ru')
      }}
    >
      <Typography variant="btn1" text={t('change_lng')} />
    </Button>
  )
}
