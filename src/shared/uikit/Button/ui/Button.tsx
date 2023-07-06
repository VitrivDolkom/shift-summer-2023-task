import { ButtonProps } from '../lib/types'

export const Button = ({ text, img, onClick, classNames }: ButtonProps) => (
  <button onClick={onClick} className={classNames}>
    {text}
    {img && <img src={img} />}
  </button>
)
