import classNames from 'classnames/bind'
import { ButtonHTMLAttributes } from 'react'

import s from './styles.module.css'

type ButtonStyleType = 'outlined' | 'solid'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  styleType: ButtonStyleType
  loader?: React.ReactNode
}

const cx = classNames.bind(s)

export const Button = ({ children, isLoading = false, styleType, loader, ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading}
    className={`${props.className} ${cx({
      btn: true,
      outlined: styleType === 'outlined',
      solid: styleType === 'solid'
    })}`}
  >
    {!isLoading && children}
    {isLoading && loader}
  </button>
)
