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
            <Typography className="centered" variant="t3" text="Введите данные карты для оплаты" />
          </div>
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
            <Button styleType="solid">
              <Typography tag="p" variant="btn1" text="Далее" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
