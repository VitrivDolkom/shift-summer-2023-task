import s from './styles.module.css'

export const PendingTicketsOrder = () => (
  <div className={s.wrapper}>
    <div className={s.title}>Ваш заказ в обработке</div>
    <div className="loader"></div>
  </div>
)
