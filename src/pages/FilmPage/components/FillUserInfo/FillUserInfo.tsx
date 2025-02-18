import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { setUserInfo } from '@/modules/FillUserInfo'
import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface FillUserInfoProps {
  onSubmit: () => void
}

export const FillUserInfo = ({ onSubmit }: FillUserInfoProps) => {
  const dispatch = useAppDispatch()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<api.CreatePaymentPersonDto>()
  const { profile } = useAppSelector((state) => state.userProfile)

  useEffect(() => {
    reset({ ...profile.user })
  }, [])

  const onFormSubmit: SubmitHandler<api.CreatePaymentPersonDto> = (userInfo) => {
    dispatch(setUserInfo(userInfo))
    onSubmit()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Typography tag="h3" className={s.title} variant="t4" text="Введите ваши данные" />
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
      <Button className={s.button} styleType="solid">
        <Typography tag="p" variant="btn1" text="Далее" />
      </Button>
    </form>
  )
}
