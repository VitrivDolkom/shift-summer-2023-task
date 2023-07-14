import classNames from 'classnames/bind'

import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface UserOrdersProps {
  orders: api.CinemaOrder[]
  onOrderCancelClick: (orderId: number) => void
}

const cx = classNames.bind(s)

export const UserOrders = ({ orders, onOrderCancelClick }: UserOrdersProps) => (
  <div className={s.orders}>
    <Typography tag="h2" className="centered" variant="t5" text="Действующие билеты" />
    {orders.map(
      (order) =>
        !!order.tickets.length && (
          <div key={order.orderNumber} className={s.order}>
            <div className={s.top}>
              <Typography tag="p" variant="sub2" text={order.tickets[0].seance.date} />
              <Typography tag="p" variant="sub2" text={order.tickets[0].seance.time} />
            </div>
            <div className={s.center}>
              <Typography
                tag="p"
                className={cx({ name: true, ellipsis: true })}
                text={'Названия нема 😥'}
              />
              <Typography
                tag="p"
                className="centered"
                variant="t4"
                text={order.tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `).toString()}
              />
            </div>
            <footer className={s.footer}>
              <Typography
                tag="p"
                className={cx({ payStatus: true, canceled: order.status === 'CANCELED' })}
                variant="btn1"
                text={order.status === 'PAYED' ? 'оплачен' : 'отменен'}
              />
              <Button
                className={s.btn}
                styleType="solid"
                onClick={() => onOrderCancelClick(order.orderNumber)}
              >
                <Typography tag="p" variant="btn1" text="отменить" />
              </Button>
              <Typography
                tag="p"
                className={cx({ orderNumber: true, canceled: order.status === 'CANCELED' })}
                text={`код билета ${order.orderNumber}`}
              />
            </footer>
          </div>
        )
    )}
  </div>
)
