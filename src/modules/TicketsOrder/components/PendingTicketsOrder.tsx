import '../lib/types'

import s from '../ui/styles.module.css'

export const PendingTicketsOrder = () => (
  <div className={s.wrapper}>
    <div className={s.title}>Ваш заказ в обработке</div>
    <div className={s.img}>
      <div className={s.loader}></div>
    </div>
  </div>
)
