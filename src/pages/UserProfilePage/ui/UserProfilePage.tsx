import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { Header } from '@/modules/Header'
import { useCancelOrderMutation, useFetchUserOrdersQuery } from '@/modules/UserOrders'
import { fetchProfile, login } from '@/modules/UserProfile'
import { Typography } from '@/shared/uikit'

import { UserOrders, UserOrdersSkelton, UserProfileInfo } from '../components'

import s from './styles.module.css'

export const UserProfilePage = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.userProfile.profile)
  const { user } = useAppSelector((state) => state.userProfile.profile)
  const ordersQuery = useFetchUserOrdersQuery({ token })
  const cancelOrderMutation = useCancelOrderMutation()

  useEffect(() => {
    dispatch(login())
    dispatch(fetchProfile({ token }))
  }, [])

  const onOrderCancel = (orderId: number) => {
    cancelOrderMutation.mutate({ token, orderId: orderId.toString() })
  }

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
            {ordersQuery.isLoading && <UserOrdersSkelton />}
            {ordersQuery.isSuccess && (
              <UserOrders orders={ordersQuery.data} onOrderCancelClick={onOrderCancel} />
            )}
            {ordersQuery.isError && (
              <Typography tag="p" variant="err1" text={ordersQuery.error.message} />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
