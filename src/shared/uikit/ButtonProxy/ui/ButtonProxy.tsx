import { ButtonProxyProps } from '../lib/types'
import { AccountButton } from './DifferentButtons/AccountButton'
import { BuyButton } from './DifferentButtons/BuyButton'
import { InfoButton } from './DifferentButtons/InfoButton'
import { LoginButton } from './DifferentButtons/LoginButton'

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

  if (type === 'account') {
    return <AccountButton {...other} />
  }

  return null
}
