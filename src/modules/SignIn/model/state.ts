import { SignInState } from './types'

export const initialState: SignInState = {
  request: {
    status: 'idle',
    error: undefined
  }
}