import { Button } from './Button'
import { getButtonClassNames } from '../lib/classNames'
import { ButtonProxyProps } from '../lib/types'

export const ButtonProxy = (props: ButtonProxyProps) => {
  const { type, ...other } = props

  return <Button classNames={getButtonClassNames(type)} {...other}/>
}
