export interface ButtonProps {
  text: string
  img?: string
  onClick?: () => void
  classNames: string
}

export interface ButtonProxyProps {
  onClick?: () => void
  text: string
  type: ButtonType
}

export type ButtonType = 'login' | 'buy' | 'info' | 'account'
