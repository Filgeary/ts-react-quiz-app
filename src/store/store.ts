import { configureStore } from '@reduxjs/toolkit'
import { quizService } from '../services/quizService'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    [quizService.reducerPath]: quizService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quizService.middleware),
})

setupListeners(store.dispatch)