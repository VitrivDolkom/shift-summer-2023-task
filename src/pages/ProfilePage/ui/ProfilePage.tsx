import { useAppSelector } from '@/store'

import { Header } from '@/modules/Header'

export const ProfilePage = () => {
  const { userInfo } = useAppSelector((state) => state.signIn)

  return (
    <div>
      <Header />
      <div>{userInfo?.token || 'pending...'}</div>
    </div>
  )
}
