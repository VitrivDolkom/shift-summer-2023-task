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
        field={register('phone', validations.phone)}
        ref={register('phone', validations.phone).ref}
      />
      <ValidatedInput
        name="Имя"
        error={errors.firstname?.message}
        field={register('firstname', validations.firstname)}
        ref={register('firstname', validations.firstname).ref}
      />
      <ValidatedInput
        name="Фамилия"
        error={errors.lastname?.message}
        field={register('lastname', validations.lastname)}
        ref={register('lastname', validations.lastname).ref}
      />
      <ValidatedInput
        name="Отчество"
        error={errors.middlename?.message}
        field={register('middlename', validations.middlename)}
        ref={register('middlename', validations.middlename).ref}
      />
      <ValidatedInput
        name="Email"
        error={errors.email?.message}
        field={register('email', validations.email)}
        ref={register('email', validations.email).ref}
      />
      <ValidatedInput
        name="Город"
        error={errors.city?.message}
        field={register('city', validations.city)}
        ref={register('city', validations.city).ref}
      />

      <div className={s.button}>
        <Button styleType="solid">
          <Typography tag="p" variant="btn1" text="Обновить данные" />
        </Button>
      </div>
    </form>
  )
}
