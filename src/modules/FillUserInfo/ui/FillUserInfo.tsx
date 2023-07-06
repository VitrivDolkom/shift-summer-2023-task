import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/shared/uikit/Button'
import { ValidatedInput } from '@/shared/uikit/ValidatedInput'

import s from './styles.module.css'

interface UserInfo {
  firstname: string
  lastname: string
  middlename: string
  phone: string
}
export const FillUserInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UserInfo>()

  const onSubmit: SubmitHandler<UserInfo> = (userInfo) => {
    console.log(userInfo)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.title}>Введите ваши данные</div>
      <ValidatedInput error={errors.firstname?.message} register={register('firstname')} />
      <ValidatedInput error={errors.lastname?.message} register={register('lastname')} />
      <ValidatedInput error={errors.middlename?.message} register={register('middlename')} />
      <ValidatedInput error={errors.phone?.message} register={register('phone')} />
      <Button type="submit" text="Далее" />
    </form>
  )
}
