import { HeaderProxyProps, HeaderType } from '../lib/types'
import { HeaderButton } from './components/HeaderButton'
import { HeaderLogo } from './components/HeaderLogo'

import s from './styles.module.css'

export const HeaderProxy = ({ type }: HeaderProxyProps) => {
  return (
    <header className={s.header}>
      <HeaderLogo />
      {type === 'withButton' && <HeaderButton />}
    </header>
  )
}
