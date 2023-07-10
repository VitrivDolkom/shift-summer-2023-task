import { AuthInfoState } from './types'

export const initialState: AuthInfoState = {
  authInfo: {
    phone: '',
    code: 0
  },
  request: {
    status: 'idle'
  }
}
