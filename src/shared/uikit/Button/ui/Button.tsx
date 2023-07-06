import { ButtonProps } from '../lib/types'

export const Button = ({ text, onClick, classNames }: ButtonProps) => (
  <button onClick={onClick} className={classNames}>
    {text}
  </button>
)
