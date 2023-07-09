import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/shared/uikit/Button'
import { ValidatedInput, validations } from '@/shared/uikit/ValidatedInput'

import { CardInfo, FillCardInfoProps } from '../lib/types'

import shiftCard from './img/shiftCard.svg'
import s from './styles.module.css'

export const FillCardInfo = ({ onSubmit }: FillCardInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CardInfo>()

  const onFormSubmit: SubmitHandler<CardInfo> = (cardInfo) => {
    onSubmit(cardInfo)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.title}>Введите данные карты для оплаты</div>
          <div className={s.top}>
            <img src={shiftCard} alt="shift card" />
          </div>
          <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
            <ValidatedInput
              name="Номер"
              error={errors.pan?.message}
              register={register('pan', validations.pan)}
            />
            <ValidatedInput
              name="Срок"
              error={errors.expireDate?.message}
              register={register('expireDate', validations.expireDate)}
            />
            <ValidatedInput
              name="CVV"
              error={errors.cvv?.message}
              register={register('cvv', validations.cvv)}
            />
            <Button type="submit" text="Далее" />
          </form>
        </div>
      </div>
    </>
  )
}
