import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false)

  const onModalOpen = useCallback(() => {
    setIsOpened(true)
    document.body.classList.add('locked')
  }, [])

  const onModalClose = useCallback(() => {
    setIsOpened(false)
    document.body.classList.remove('locked')
  }, [])

  return { isOpened, onModalOpen, onModalClose }
}
