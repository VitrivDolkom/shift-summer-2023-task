import { useEffect, useState } from 'react'

import { getFromLocalStorage, setToLocalStorage } from '@/shared/lib'

import { defaultProfile, ProfileContext } from './ProfileContext'

const AUTH_KEY = 'isAuth'
const TOKEN_KEY = 'token'

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<api.UserProfile>(defaultProfile)
  const [isAuth, setIsAuth] = useState(getFromLocalStorage(AUTH_KEY, false))

  const login = () => {
    setIsAuth(true)
  }

  const logout = () => {
    setIsAuth(false)
  }
  const updateProfile = (profile: api.UserProfile) => {
    setProfile(profile)
  }

  const updateUser = (user: api.User) => {
    setProfile((prev) => ({ ...prev, user }))
  }

  useEffect(() => {
    setToLocalStorage(AUTH_KEY, isAuth)
  }, [isAuth])

  useEffect(() => {
    setToLocalStorage(TOKEN_KEY, profile.token)
  }, [profile.token])

  return (
    <ProfileContext.Provider value={{ login, logout, isAuth, profile, updateUser, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
