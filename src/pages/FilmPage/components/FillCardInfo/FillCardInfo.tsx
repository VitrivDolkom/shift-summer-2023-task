import { SubmitHandler, useForm } from 'react-hook-form'

import shiftCard from '@/assets/img/shiftCard.svg'
import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface FillCardInfoProps {
  onSubmit: (cardInfo: api.CreatePaymentDebitCardDto) => void
}

export const FillCardInfo = ({ onSubmit }: FillCardInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<api.CreatePaymentDebitCardDto>()

  const onFormSubmit: SubmitHandler<api.CreatePaymentDebitCardDto> = (cardInfo) => {
    onSubmit(cardInfo)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.title}>
            <Typography
              tag="h3"
              className="centered"
              variant="t3"
              text="Введите данные карты для оплаты"
            />
          </div>
          <div className={s.top}>
            <img src={shiftCard} alt="shift card" />
          </div>
          <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
            <ValidatedInput
              name="Номер"
              error={errors.pan?.message}
              field={register('pan', validations.pan)}
              ref={register('pan', validations.pan).ref}
            />
            <ValidatedInput
              name="Срок"
              error={errors.expireDate?.message}
              field={register('expireDate', validations.expireDate)}
              ref={register('expireDate', validations.expireDate).ref}
            />
            <ValidatedInput
              name="CVV"
              error={errors.cvv?.message}
              field={register('cvv', validations.cvv)}
              ref={register('cvv', validations.cvv).ref}
            />
            <Button className={s.btn} styleType="solid">
              <Typography tag="p" variant="btn1" text="Далее" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
