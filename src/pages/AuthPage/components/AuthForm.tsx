import { useAppDispatch, useAppSelector } from '@/store'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { createOtpCode } from '@/modules/Auth'
import {
  login,
  ProfileService,
  setSignInError,
  setSignInPending,
  setUserProfile
} from '@/modules/Profile'
import { ErrorMessage, ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { useTwoStepAction } from '@/shared/lib'
import { Button, Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

export const AuthForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<api.SignInDto>()
  const dispatch = useAppDispatch()
  const authInfo = useAppSelector((state) => state.authInfo)
  const signIn = useAppSelector((state) => state.userProfile)
  const { isFirst, nextStep } = useTwoStepAction()

  useEffect(() => {
    if (signIn.request.status === 'success') {
      dispatch(login())
      navigate('/profile')
    }
  }, [signIn.request.status])

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
            <Typography
              variant="sub2"
              text={`Запросить код повторно можно через ${
                authInfo.otpResponse?.retryDelay || ''
              } секунд`}
            />
          </div>
          <Button styleType="outlined" onClick={onCodeRequestClick}>
            <Typography tag="p" variant="btn2" text="Запросить код" />
          </Button>
        </>
      )}

      {signIn.request.status === 'error' && <ErrorMessage message={signIn.request.error} />}
      {authInfo.request.status === 'error' && <ErrorMessage message={authInfo.request.error} />}

      <div className={s.btn}>
        <Button
          styleType="solid"
          isLoading={authInfo.request.status === 'pending' || signIn.request.status === 'pending'}
        >
          <Typography tag="p" variant="btn1" text="Продолжить" />
        </Button>
      </div>
    </form>
  )
}
