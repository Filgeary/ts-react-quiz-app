import { configureStore } from '@reduxjs/toolkit'
import { quizService } from '../services/quizService'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { authService } from '../services/authService'
import auth from './slices/authSlice'

export const store = configureStore({
  reducer: {
    [quizService.reducerPath]: quizService.reducer,
    [authService.reducerPath]: authService.reducer,
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      quizService.middleware,
      authService.middleware,
    ),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
