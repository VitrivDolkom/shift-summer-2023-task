import { useAppDispatch } from '@/store'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Header } from '@/modules/Header'
import { Button } from '@/shared/uikit/Button'
import { ValidatedInput, validations } from '@/shared/uikit/ValidatedInput'

import { createOtpCode } from '../model/thunk'
import { AuthInfo } from '../model/types'

import s from './styles.module.css'

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthInfo>()
  const dispatch = useAppDispatch()

  const onFormSubmit: SubmitHandler<AuthInfo> = (authInfo) => {
    dispatch(createOtpCode(authInfo.phone))
  }

  return (
    <div>
      <Header />
      <div className={s.content}>
        <div className={s.title}>Авторизация</div>

        <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
          <ValidatedInput
            name="Номер телефона"
            register={register('phone', validations.phone)}
            error={errors.phone?.message}
          />
          <div className={s.btn}>
            <Button type="submit" text="Продолжить" />
          </div>
        </form>
      </div>
    </div>
  )
}
