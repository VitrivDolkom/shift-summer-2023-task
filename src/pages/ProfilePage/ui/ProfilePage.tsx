import { useAppSelector } from '@/store'

import { Header } from '@/modules/Header'

export const ProfilePage = () => {
  const { profile } = useAppSelector((state) => state.userProfile)

  return (
    <div>
      <Header />
      <div>{profile?.token || 'pending...'}</div>
    </div>
  )
}
