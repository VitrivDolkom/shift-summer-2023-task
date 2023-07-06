export interface ButtonProps {
  onClick?: () => void
  text: string
  classNames: string
}

export interface ButtonProxyProps {
  onClick?: () => void
  text: string
  type: ButtonType
}

export type ButtonType = 'login' | 'buy' | 'info' | 'account'
