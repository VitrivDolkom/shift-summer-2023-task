import { useAppDispatch, useAppSelector } from '@/store'
import { SubmitHandler, useForm } from 'react-hook-form'

import { fetchSignIn } from '@/modules/SignIn'
import { Button } from '@/shared/uikit/Button'
import { ValidatedInput, validations } from '@/shared/uikit/ValidatedInput'

import { useTwoStepAction } from '../lib/useTwoStepAction'
import { createOtpCode } from '../model/thunk'
import { SignInDto } from '../model/types'

import s from './styles.module.css'
import { useNavigate } from 'react-router-dom'

export const AuthForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignInDto>()
  const dispatch = useAppDispatch()
  const { codeInfo } = useAppSelector((state) => state.authInfo)
  const { isFirst, nextStep } = useTwoStepAction()

  const onFormSubmit: SubmitHandler<SignInDto> = (signInDto) => {
    if (!isFirst) {
      dispatch(fetchSignIn(signInDto))
      navigate('/profile')
      return
    }

    nextOtpCode()
  }

  const nextOtpCode = () => {
    dispatch(createOtpCode({ phone: watch('phone') }))
    nextStep()
  }

  const onCodeRequestClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault()
    nextOtpCode()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ValidatedInput
        name="Номер телефона"
        register={register('phone', validations.phone)}
        error={errors.phone?.message}
      />
      {!isFirst && (
        <>
          <ValidatedInput
            name="Код из SMS"
            register={register('code', validations.otpCode)}
            error={errors.code?.message}
          />
          <div className={s.info}>
            Запросить код повторно можно через {codeInfo?.retryDelay || ''} секунд
          </div>
          <Button type="login" text="Запросить код" onClick={onCodeRequestClick} />
        </>
      )}
      <div className={s.btn}>
        <Button type="submit" text="Продолжить" />
      </div>
    </form>
  )
}
