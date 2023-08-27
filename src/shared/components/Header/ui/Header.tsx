import { HeaderButton } from '../components/HeaderButton'
import { HeaderLogo } from '../components/HeaderLogo'

import s from './styles.module.css'

export interface HeaderProps {
  type?: 'withButton'
}

export const Header = ({ type }: HeaderProps) => (
  <header className={s.header}>
    <HeaderLogo />
    {type === 'withButton' && <HeaderButton />}
  </header>
)
