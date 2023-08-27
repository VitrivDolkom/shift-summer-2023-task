import { createContext, useContext } from 'react'

interface ProfileContext {
  profile: api.UserProfile
  updateProfile: (profile: api.UserProfile) => void
  updateUser: (user: api.User) => void
  isAuth: boolean
  login: () => void
  logout: () => void
}

export const defaultUser: api.User = { phone: '' }
export const defaultProfile: api.UserProfile = {
  token: '',
  user: defaultUser
}

export const ProfileContext = createContext<ProfileContext>({
  profile: defaultProfile,
  updateProfile: (defaultProfile) => ({}),
  updateUser: (defaultUser) => ({}),
  isAuth: false,
  login: () => ({}),
  logout: () => ({})
})

export const useProfileContext = () => useContext(ProfileContext)
