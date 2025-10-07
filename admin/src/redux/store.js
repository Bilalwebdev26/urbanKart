import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/auth.slice'
export const store = configureStore({
  reducer: {
    auth:authSlice
  },
})