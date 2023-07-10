import { useCallback, useState } from 'react'

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  const onHover = useCallback(() => {
    setIsHovered(true)
  }, [])

  const onHoverEnd = useCallback(() => {
    setIsHovered(false)
  }, [])

  return { isHovered, onHover, onHoverEnd }
}
