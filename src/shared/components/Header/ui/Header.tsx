import { useTranslation } from 'react-i18next'

import { Button, Typography } from '@/shared/uikit'

import { HeaderButton } from '../components/HeaderButton'
import { HeaderLogo } from '../components/HeaderLogo'

import s from './styles.module.css'

export interface HeaderProps {
  type?: 'withButton'
}

export const Header = ({ type }: HeaderProps) => {
  const { i18n } = useTranslation()

  return (
    <header className={s.header}>
      <HeaderLogo />
      {type === 'withButton' && <HeaderButton />}

      <Button
        type="submit"
        styleType="solid"
        className={s.lngBtn}
        onClick={() => {
          if (i18n.language === 'ru') i18n.changeLanguage('en')
          else i18n.changeLanguage('ru')
        }}
      >
        <Typography variant="btn1" text="Поменять язык" />
      </Button>
    </header>
  )
}
