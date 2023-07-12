import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import waiting from '@/assets/gif/waiting.gif'
import { fetchProfile } from '@/modules/UserProfile'
import { useToken } from '@/shared/lib'

export const RootPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { request } = useAppSelector((state) => state.userProfile)
  const { token } = useToken()

  useEffect(() => {
    dispatch(fetchProfile({ token }))
  }, [])

  useEffect(() => {
    if (request.status !== 'pending' && request.status !== 'idle') {
      navigate('/poster')
    }
  }, [request.status])

  return <img src={waiting} alt="Ожидайте ..." />
}
