import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/shared/uikit/Button'
import { ValidatedInput, validations } from '@/shared/uikit/ValidatedInput'

import { FillUserInfoProps } from '../lib/types'
import { UserInfo } from '../model/types'

import s from './styles.module.css'

export const FillUserInfo = ({ onSubmit }: FillUserInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInfo>()

  const onFormSubmit: SubmitHandler<UserInfo> = (userInfo) => {
    onSubmit(userInfo)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={s.title}>Введите ваши данные</div>
      <ValidatedInput
        name="Имя"
        error={errors.firstname?.message}
        register={register('firstname', validations.firstname)}
      />
      <ValidatedInput
        name="Фамилия"
        error={errors.lastname?.message}
        register={register('lastname', validations.lastname)}
      />
      <ValidatedInput
        name="Отчество"
        error={errors.middlename?.message}
        register={register('middlename', validations.middlename)}
      />
      <ValidatedInput
        name="Телефон"
        error={errors.phone?.message}
        register={register('phone', validations.phone)}
      />
      <div className={s.button}>
        <Button type="submit" text="Далее" />
      </div>
    </form>
  )
}
