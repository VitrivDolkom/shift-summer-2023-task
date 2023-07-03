export interface ButtonProps {
  onClick?: () => void
}

export interface ButtonProxyProps extends ButtonProps {
  type: ButtonType
}

type ButtonType = 'login' | 'buy' | 'info' | 'account'
