import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { login, ProfileService, setUserProfile } from '@/modules/Profile'
import { ValidatedInput } from '@/shared/components'
import { validations } from '@/shared/const'
import { useTwoStepAction } from '@/shared/lib'
import { Button } from '@/shared/uikit'

import { createOtpCode } from '../model/thunk'

import s from './styles.module.css'

export const AuthForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<api.SignInDto>()
  const dispatch = useAppDispatch()
  const { otpResponse: codeInfo } = useAppSelector((state) => state.authInfo)
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

    const singInResponse = await ProfileService.signIn(signInDto)

    if (singInResponse.data.success) {
      dispatch(setUserProfile(singInResponse.data))
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
            Запросить код повторно можно через {codeInfo?.retryDelay || ''} секунд
          </div>
          <Button styleType="solid" onClick={onCodeRequestClick}>
            <p>Запросить код</p>
          </Button>
        </>
      )}
      <div className={s.btn}>
        <Button styleType="solid">
          <p>Продолжить</p>
        </Button>
      </div>
    </form>
  )
}
