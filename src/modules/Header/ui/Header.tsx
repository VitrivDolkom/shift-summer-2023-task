import { HeaderProxyProps } from '../lib/types'
import { HeaderButton } from '../components/HeaderButton'
import { HeaderLogo } from '../components/HeaderLogo'

import s from './styles.module.css'

export const Header = ({ type }: HeaderProxyProps) => (
  <header className={s.header}>
    <HeaderLogo />
    {type === 'withButton' && <HeaderButton />}
  </header>
)
