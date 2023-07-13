import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { Header } from '@/modules/Header'
import { fetchUserOrders } from '@/modules/UserOrders/model/thunk'
import { fetchProfile, login } from '@/modules/UserProfile'
import { Typography } from '@/shared/uikit'

import { UserOrders, UserOrdersSkelton, UserProfileInfo } from '../components'

import s from './styles.module.css'

export const UserProfilePage = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.userProfile.profile)
  const { user } = useAppSelector((state) => state.userProfile.profile)
  const ordersInfo = useAppSelector((state) => state.userOrders)

  useEffect(() => {
    dispatch(login())
    dispatch(fetchUserOrders({ token }))
    dispatch(fetchProfile({ token }))
  }, [])

  return (
    <>
      <Header type="withButton" />
      <main className={s.wrapper}>
        <Typography tag="h1" className="centered" variant="t1" text="Личный кабинет" />
        <div className={s.content}>
          <div className={s.left}>
            <UserProfileInfo user={user} />
          </div>
          <div className={s.right}>
            {ordersInfo.request.status === 'pending' && <UserOrdersSkelton />}
            {ordersInfo.request.status === 'success' && <UserOrders orders={ordersInfo.orders} />}
            {ordersInfo.request.status === 'error' && (
              <Typography tag="p" variant="err1" text={ordersInfo.request.error} />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
