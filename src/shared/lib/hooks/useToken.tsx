import { TOKEN_KEY } from '@/shared/const'

import { getFromLocalStorage } from '../helpers'

export const useToken = () => {
  const token = getFromLocalStorage(TOKEN_KEY, '')
  return { token }
}
