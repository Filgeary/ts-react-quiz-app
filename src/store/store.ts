import { configureStore } from '@reduxjs/toolkit'
import { quizService } from '../services/quizService'

export const store = configureStore({
  reducer: {
    [quizService.reducerPath]: quizService.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quizService.middleware),
})
