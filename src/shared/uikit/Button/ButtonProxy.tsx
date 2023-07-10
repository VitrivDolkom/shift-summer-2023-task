import { getButtonClassNames } from './classNames'
import { ButtonProxyProps } from './types'
import { Button } from './Button'

import ticket from '@/assets/img/ticket.svg'

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
