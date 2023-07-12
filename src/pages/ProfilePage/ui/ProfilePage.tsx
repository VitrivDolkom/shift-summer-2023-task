import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { Header } from '@/modules/Header'
import { fetchUserOrders } from '@/modules/UserOrders/model/thunk'
import { ErrorMessage } from '@/shared/components/ErrorMessage/ErrorMessage'

import { UserOrders } from '../components/UserOrders/UserOrders'
import { UserOrdersSkelton } from '../components/UserOrdersSkeleton/UserOrdersSkelton'
import { UserProfileInfo } from '../components/UserProfileInfo/UserProfileInfo'

import s from './styles.module.css'

export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.userProfile.profile)
  const { user } = useAppSelector((state) => state.userProfile.profile)
  const ordersInfo = useAppSelector((state) => state.userOrders)

  useEffect(() => {
    dispatch(fetchUserOrders({ token }))
  }, [])

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className={s.left}>
          <UserProfileInfo user={user} />
        </div>
        <div className={s.right}>
          {ordersInfo.request.status === 'pending' && <UserOrdersSkelton />}
          {ordersInfo.request.status === 'success' && <UserOrders orders={ordersInfo.orders} />}
          {ordersInfo.request.status === 'success' && (
            <ErrorMessage message={ordersInfo.request.error} />
          )}
        </div>
      </div>
    </>
  )
}
