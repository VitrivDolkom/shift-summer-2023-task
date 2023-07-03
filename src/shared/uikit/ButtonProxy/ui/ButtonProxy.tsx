import { ButtonProxyProps } from '../lib/types'
import { BuyButton } from './BuyButton'
import { InfoButton } from './InfoButton'
import { LoginButton } from './LoginButton'

export const ButtonProxy = (props: ButtonProxyProps) => {
  const { type, ...other } = props

  if (type === 'info') {
    return <InfoButton {...other} />
  }

  if (type === 'buy') {
    return <BuyButton {...other} />
  }

  if (type === 'login') {
    return <LoginButton {...other} />
  }

  return null
}
