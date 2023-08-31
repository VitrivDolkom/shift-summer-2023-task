import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCreateOtpCode, useSignIn } from '@/shared/api'
import { ButtonLoader, ValidatedInput } from '@/shared/components'
import { routes, validations } from '@/shared/const'
import { useTimer, useTwoStepAction } from '@/shared/lib'
import { useProfile } from '@/shared/store'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

export const AuthForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<api.SignInDto>()
  const { updateProfile } = useProfile()
  const otpCodeMutation = useCreateOtpCode()
  const signInMutation = useSignIn()
  const { isFirst, nextStep } = useTwoStepAction()
  const timer = useTimer()

  useEffect(() => {
    if (signInMutation.isSuccess) {
      updateProfile(signInMutation.data)
      navigate(routes.profile)
    }
  }, [signInMutation.status])

  useEffect(() => {
    if (!!otpCodeMutation.data?.retryDelay) {
      timer.start(otpCodeMutation.data?.retryDelay)
    }
  }, [otpCodeMutation.data?.retryDelay])

  const onFormSubmit: SubmitHandler<api.SignInDto> = async (signInDto) => {
    if (isFirst) {
      nextOtpCode()
      return
    }

    signInMutation.singIn(signInDto)
  }

  const nextOtpCode = () => {
    otpCodeMutation.mutate({ phone: watch('phone') })
    nextStep()
  }

  const onCodeRequestClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault()

    if (timer.timesUp) nextOtpCode()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
      <ValidatedInput
        name="Номер телефона"
        error={errors.phone?.message}
        field={register('phone', validations.phone)}
        ref={register('phone', validations.phone).ref}
      />
      {!isFirst && (
        <>
          <ValidatedInput
            name="Код из SMS"
            error={errors.code?.message}
            field={register('code', validations.otpCode)}
            ref={register('code', validations.otpCode).ref}
          />
          <div className={s.info}>
            <Typography
              variant="sub2"
              text={`Запросить код повторно можно через ${timer.time} секунд`}
            />
          </div>
          <Button
            styleType="outlined"
            onClick={onCodeRequestClick}
            isLoading={!isFirst && otpCodeMutation.isLoading}
            loader={<ButtonLoader className="loader red" />}
          >
            <Typography tag="p" variant="btn2" text="Запросить код" />
          </Button>
        </>
      )}
      {signInMutation.error instanceof Error && (
        <div className={s.error}>
          <Typography tag="p" variant="err2" text={signInMutation.error.message} />
        </div>
      )}
      {otpCodeMutation.error instanceof Error && (
        <div className={s.error}>
          <Typography tag="p" variant="err2" text={otpCodeMutation.error.message} />
        </div>
      )}

      <div className={s.btn}>
        <Button
          styleType="solid"
          isLoading={signInMutation.isLoading || otpCodeMutation.isLoading}
          loader={<ButtonLoader className="loader white" />}
        >
          <Typography tag="p" variant="btn1" text="Продолжить" />
        </Button>
      </div>
    </form>
  )
}
