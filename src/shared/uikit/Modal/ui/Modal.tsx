import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import close from './img/close.svg'
import s from './styles.module.css'

interface ModalProps {
  children: ReactNode
  isOpened: boolean
  onClose: () => void
}

export const Modal = ({ children, isOpened, onClose }: ModalProps) => {
  if (!isOpened) {
    return null
  }

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.content}>
        <div className={s.close} onClick={onClose}>
          <img src={close} alt="закрыть" />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('.modals') || document.body
  )
}
