import { SubmitHandler } from 'react-hook-form'

import { AuthForm } from '@/modules/Auth'

import { AuthInfo } from '../../../modules/Auth/model/types'

export const AuthPage = () => {
  const onFormSubmit: SubmitHandler<AuthInfo> = (authInfo) => {
    console.log(authInfo)
  }

  return <AuthForm />
}
