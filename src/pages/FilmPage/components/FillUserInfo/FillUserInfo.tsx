import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { useProfile } from '@/shared/store'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface FillUserInfoProps {
  onSubmit: () => void
  updatePersonDto: (personDto: api.CreatePaymentPersonDto) => void
}

export const FillUserInfo = ({ onSubmit, updatePersonDto }: FillUserInfoProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<api.CreatePaymentPersonDto>()
  const { profile } = useProfile()

  useEffect(() => {
    reset({ ...profile.user })
  }, [])

  const onFormSubmit: SubmitHandler<api.CreatePaymentPersonDto> = (userInfo) => {
    updatePersonDto(userInfo)
    onSubmit()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Typography tag="h3" className={s.title} variant="t4" text="Введите ваши данные" />
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
        name="Телефон"
        error={errors.phone?.message}
        field={register('phone', validations.phone)}
        ref={register('phone', validations.phone).ref}
      />
      <Button className={s.button} styleType="solid">
        <Typography tag="p" variant="btn1" text="Далее" />
      </Button>
    </form>
  )
}
