import { useEffect } from 'react'

import { useCancelOrder, useFetchOrders, useFetchSession } from '@/shared/api'
import { Header } from '@/shared/components'
import { useProfile } from '@/shared/store'
import { Typography } from '@/shared/uikit'

import { UserOrders, UserOrdersSkelton, UserProfileInfo } from '../components'

import s from './styles.module.css'

export const UserProfilePage = () => {
  const { profile, updateUser, login } = useProfile()
  const fetchSession = useFetchSession({ token: profile.token })
  const fetchOrders = useFetchOrders({ token: profile.token })
  const { cancelOrder } = useCancelOrder()

  useEffect(() => {
    login()
  }, [])

  useEffect(() => {
    if (fetchSession.isSuccess) updateUser(fetchSession.data)
  }, [fetchSession.status])

  const onOrderCancel = (orderId: number) => {
    cancelOrder({ token: profile.token, orderId: orderId.toString() })
  }

  return (
    <>
      <Header type="withButton" />
      <main className={s.wrapper}>
        <Typography tag="h1" className="centered" variant="t1" text="Личный кабинет" />
        <div className={s.content}>
          <div className={s.left}>
            <UserProfileInfo user={profile.user} />
          </div>
          <div className={s.right}>
            {fetchOrders.isLoading && <UserOrdersSkelton />}
            {fetchOrders.isSuccess && (
              <UserOrders orders={fetchOrders.data} onOrderCancelClick={onOrderCancel} />
            )}
            {fetchOrders.isError && (
              <Typography tag="p" variant="err1" text={fetchOrders.error.message} />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
