import { useAppDispatch } from '@/store'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button } from '@/shared/uikit'

import { setUserInfo } from '../model/slice'

import s from './styles.module.css'

interface FillUserInfoProps {
  onSubmit: () => void
}

export const FillUserInfo = ({ onSubmit }: FillUserInfoProps) => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<api.CreatePaymentPersonDto>()

  const onFormSubmit: SubmitHandler<api.CreatePaymentPersonDto> = (userInfo) => {
    dispatch(setUserInfo(userInfo))
    onSubmit()
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
        <Button styleType="solid">
          <p>Далее</p>
        </Button>
      </div>
    </form>
  )
}
