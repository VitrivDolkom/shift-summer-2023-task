import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface UserProfileInfoProps {
  user: api.User
}

export const UserProfileInfo = ({ user }: UserProfileInfoProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<api.User>()

  useEffect(() => {
    reset({ ...user })
  }, [])

  const onFormSubmit: SubmitHandler<api.User> = (user) => {
    // TODO запрос на бэкенд
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ValidatedInput
        name="Телефон"
        error={errors.phone?.message}
        register={register('phone', validations.phone)}
      />
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
        name="Email"
        error={errors.email?.message}
        register={register('email', validations.email)}
      />
      <ValidatedInput
        name="Город"
        error={errors.city?.message}
        register={register('city', validations.city)}
      />

      <div className={s.button}>
        <Button styleType="solid">
          <Typography tag="p" variant="btn1" text="Обновить данные" />
        </Button>
      </div>
    </form>
  )
}
