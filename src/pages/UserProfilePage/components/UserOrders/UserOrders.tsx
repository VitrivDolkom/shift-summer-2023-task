import classNames from 'classnames/bind'

import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface UserOrdersProps {
  orders: api.CinemaOrder[]
}

const cx = classNames.bind(s)

export const UserOrders = ({ orders }: UserOrdersProps) => (
  <div className={s.orders}>
    <Typography className="centered" variant="t5" text="Действующие билеты" />
    {orders.map((order) => (
      <div key={order.orderNumber} className={s.order}>
        <div className={s.top}>
          <Typography variant="sub2" text={'date'} />
          <Typography variant="sub2" text={'time'} />
        </div>
        <div className={s.center}>
          <Typography className={cx({ name: true, ellipsis: true })} text="Оnrelf ksdfjlsdf" />
          <Typography
            className="centered"
            variant="t4"
            text={order.tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `).toString()}
          />
        </div>
        <footer className={s.footer}>
          <Typography
            className={cx({ payStatus: true, canceled: order.status === 'CANCELED' })}
            variant="btn1"
            text={order.status.toLowerCase()}
          />
          <Typography
            className={cx({ orderNumber: true, canceled: order.status === 'CANCELED' })}
            text={`код билета ${order.orderNumber}`}
          />
        </footer>
      </div>
    ))}
  </div>
)
