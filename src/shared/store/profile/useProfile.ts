import { produce } from 'immer'
import { create } from 'zustand'

import { AUTH_KEY, TOKEN_KEY } from '@/shared/const'
import { setToLocalStorage } from '@/shared/lib'

interface ProfileStore {
  profile: api.UserProfile
  isAuth: boolean
  updateProfile: (profile: api.UserProfile) => void
  updateUser: (user: api.User) => void
  login: () => void
  logout: () => void
}

interface ProfileState {
  profile: api.UserProfile
  isAuth: boolean
}

export const defaultUser: api.User = { phone: '' }
export const defaultProfile: api.UserProfile = {
  token: '',
  user: defaultUser
}

export const useProfile = create<ProfileStore>((set) => ({
  profile: defaultProfile,
  isAuth: false,
  updateProfile: (profile: api.UserProfile) => {
    setToLocalStorage(TOKEN_KEY, profile.token)
    set(() => ({ profile: profile }))
  },
  login: () => set(() => ({ isAuth: true })),
  logout: () => {
    setToLocalStorage(AUTH_KEY, false)
    setToLocalStorage(TOKEN_KEY, '')
    set(() => ({ isAuth: false }))
  },
  updateUser: (user: api.User) =>
    set(
      produce((state: ProfileState) => {
        state.profile.user = user
      })
    )
}))
