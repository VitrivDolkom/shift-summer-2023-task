import { ButtonType } from './types'

import s from './styles.module.css'

export const getButtonClassNames = (type: ButtonType): string => {
  const classNames = [s.btn]

  if (type === 'info') {
    classNames.push(s.info)
  }

  if (type === 'buy' || type === 'submit') {
    classNames.push(s.buy)
  }

  if (type === 'login') {
    classNames.push(s.login)
  }

  if (type === 'account') {
    classNames.push(s.account)
  }

  return classNames.join(' ')
}
