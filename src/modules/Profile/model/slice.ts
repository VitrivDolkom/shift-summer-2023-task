import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchProfile } from './thunk'

export const profileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<api.SignInResponse>) {
      state.profile = { user: action.payload.user, token: action.payload.token }
    },
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.request.status = 'pending'
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        debugger
        state.profile.user = action.payload.user
        state.request.status = 'success'
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.request.status = 'error'
        state.request.error = action.error.message
      })
  }
})

export const { login, logout, setUserProfile } = profileSlice.actions
