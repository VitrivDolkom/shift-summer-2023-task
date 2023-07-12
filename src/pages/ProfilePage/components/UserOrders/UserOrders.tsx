import s from './styles.module.css'

interface UserOrdersProps {
  orders: api.CinemaOrder[]
}

export const UserOrders = ({ orders }: UserOrdersProps) => (
  <div className={s.orders}>
    {orders.map((order) => (
      <div key={order.orderNumber} className={s.order}>
        {order.phone}
      </div>
    ))}
  </div>
)
