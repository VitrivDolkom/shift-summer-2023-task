import { UserOrdersState } from './types'

export const initialState: UserOrdersState = {
  orders: [],
  request: {
    status: 'idle'
  }
}
