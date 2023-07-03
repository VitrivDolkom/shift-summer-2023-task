import { HeaderProxyProps, HeaderType } from '../lib/types'
import { HeaderButton } from './components/HeaderButton'
import { HeaderLogo } from './components/HeaderLogo'

export const HeaderProxy = ({ type }: HeaderProxyProps) => {
  return (
    <header>
      <HeaderLogo />
      {type === 'withButton' && <HeaderButton />}
    </header>
  )
}
