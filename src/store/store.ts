import { configureStore } from '@reduxjs/toolkit'

import { authMiddleware, tokenMiddleware } from './middleware'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware, tokenMiddleware)
})

export type AppDispatch = typeof store.dispatch
