export interface ButtonProps {
  onClick?: () => void
}

export interface ButtonProxyProps extends ButtonProps {
  type: ButtonType
}

export type ButtonType = 'login' | 'buy' | 'info' | 'account'
