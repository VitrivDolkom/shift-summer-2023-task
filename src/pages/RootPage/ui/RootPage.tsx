import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import waiting from '@/assets/gif/waiting.gif'

export const RootPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/poster')
    // TODO может быть какая-то логика авторизиции или ...
  }, [])

  return <img src={waiting} alt="Ожидайте ..." />
}
