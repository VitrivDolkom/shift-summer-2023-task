import { useCallback, useState } from 'react'

export const useTwoStepAction = () => {
  const [isFirst, setIsFirst] = useState(true)

  const nextStep = useCallback(() => {
    setIsFirst(false)
  }, [])

  return { isFirst, nextStep }
}
