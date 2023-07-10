import { AuthInfoState } from './types'

export const initialState: AuthInfoState = {
  signInDto: {
    phone: '',
    code: 0
  },
  request: {
    status: 'idle'
  }
}
