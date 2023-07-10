export interface ButtonProps {
  text: string
  img?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  classNames: string
}

export interface ButtonProxyProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  text: string
  type: ButtonType
}

export type ButtonType = 'login' | 'buy' | 'info' | 'account' | 'submit'
