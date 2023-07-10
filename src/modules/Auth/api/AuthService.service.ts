import { authInstance } from '@/shared/api'

export const AuthService = {
  postPhoneNumber: async (phone: string) => await authInstance.post('/otp', { phone })
}
