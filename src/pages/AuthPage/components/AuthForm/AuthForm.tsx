import { useAppDispatch, useAppSelector } from '@/store'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCreateOtpCodeMutation } from '@/modules/Auth'
import { ProfileService, setSignInError, setSignInPending, setUserProfile } from '@/modules/UserProfile'
import { ButtonLoader, ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { useTimer, useTwoStepAction } from '@/shared/lib'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

export const AuthForm = () => {
  const [otpCodeError, setOtpCodeError] = useState('')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<api.SignInDto>()
  const dispatch = useAppDispatch()
  const otpCodeMutation = useCreateOtpCodeMutation()
  const signIn = useAppSelector((state) => state.userProfile)
  const { isFirst, nextStep } = useTwoStepAction()
  const timer = useTimer()

  useEffect(() => {
    if (signIn.request.status === 'success') {
      navigate('/profile')
    }
  }, [signIn.request.status])

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

    dispatch(setSignInPending())

    try {
      const singInResponse = await ProfileService.signIn(signInDto)
      dispatch(setUserProfile(singInResponse.data))
    } catch (error) {
      dispatch(
        setSignInError(
          (error as AxiosError<api.SignInResponse>).response?.data.reason || 'Ошибка регистрации'
        )
      )
    }
  }

  const nextOtpCode = () => {
    otpCodeMutation.mutate({ phone: watch('phone') })
    nextStep()
  }

  const onCodeRequestClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault()

    if (!timer.timesUp) {
      setOtpCodeError('Подождите, новый код недоступен')
      return
    }

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

      {(signIn.request.status === 'error' || otpCodeMutation.isError) && (
        <div className={s.error}>
          <Typography tag="p" variant="err2" text={signIn.request.error || otpCodeMutation.error} />
        </div>
      )}

      <div className={s.btn}>
        <Button
          styleType="solid"
          isLoading={signIn.request.status === 'pending' || otpCodeMutation.isLoading}
          loader={<ButtonLoader className="loader white" />}
        >
          <Typography tag="p" variant="btn1" text="Продолжить" />
        </Button>
      </div>
    </form>
  )
}
