import { useId } from 'react'

import s from './styles.module.css'

export interface ValidatedInputProps<T> {
  name: string
  error?: string
  register: T
}

export const ValidatedInput = <T,>({ name, error, register }: ValidatedInputProps<T>) => {
  const inputId = useId()

  return (
    <div className={s.wrapper}>
      <label className={[s.label, !!error && s.error].join(' ')} htmlFor={inputId}>
        {name}
      </label>
      <input className={s.input} type="text" {...register} id={inputId} />
      {!!error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
}
