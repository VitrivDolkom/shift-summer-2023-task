import { useAppSelector } from '@/store'

export const ProfilePage = () => {
  const { userInfo } = useAppSelector((state) => state.signInSlice)

  return <div>{userInfo?.token || 'токена нема'}</div>
}
