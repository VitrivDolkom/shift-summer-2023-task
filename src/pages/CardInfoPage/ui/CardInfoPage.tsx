import { useForm } from 'react-hook-form'

import { Header } from '@/modules/Header'
import { Button } from '@/shared/uikit/Button'
import { ValidatedInput, validations } from '@/shared/uikit/ValidatedInput'

import { CardInfo } from '../model/types'

import shiftcard from './img/shiftcard.svg'
import s from './styles.module.css'

export const CardInfoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CardInfo>()

  return (
    <>
      <Header />
      <main className={s.wrapper}>
        <div className={s.content}>
          <div className={s.title}>Введите данные карты для оплаты</div>
          <div className={s.top}>
            <img src={shiftcard} alt="shift card" />
          </div>
          <form className={s.form}>
            <ValidatedInput
              name="Номер"
              error={errors.pan?.message}
              register={register('pan', validations.pan)}
            />
            <ValidatedInput
              name="Срок"
              error={errors.expireDate?.message}
              register={register('pan', validations.expireDate)}
            />
            <ValidatedInput
              name="CVV"
              error={errors.cvv?.message}
              register={register('pan', validations.cvv)}
            />
            <Button type="submit" text="Далее" />
          </form>
        </div>
      </main>
    </>
  )
}
