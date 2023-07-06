import { getButtonClassNames } from '../lib/classNames'
import { ButtonProxyProps } from '../lib/types'
import { Button } from './Button'

import ticket from './img/ticket.svg'

export const ButtonProxy = (props: ButtonProxyProps) => {
  const { type, ...other } = props

  return (
    <Button
      classNames={getButtonClassNames(type)}
      {...other}
      img={type === 'buy' ? ticket : undefined}
    />
  )
}
