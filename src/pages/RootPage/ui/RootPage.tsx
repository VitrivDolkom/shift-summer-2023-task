import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import waiting from '@/assets/gif/waiting.gif'
import { Loader } from '@/shared/components'
import { routes } from '@/shared/const'

export const RootPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routes.poster)
    // TODO может быть какая-то логика авторизиции или ...
  }, [])

  return <Loader img={waiting} />
}
