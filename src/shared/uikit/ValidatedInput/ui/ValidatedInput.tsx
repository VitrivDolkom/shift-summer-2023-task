import { useId } from 'react'

import s from './styles.module.css'

interface ValidatedInputProps<T> {
  register: T
  error?: string | undefined
}

export const ValidatedInput = <T, >({ error, register }: ValidatedInputProps<T>) => {
  const inputId = useId()

  return (
    <div className={s.wrapper}>
      <label htmlFor={inputId}></label>
      <input className={s.input} type="text" {...register} id={inputId} />
      {!!error && <span>{error}</span>}
    </div>
  )
}
