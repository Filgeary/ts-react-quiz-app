import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QuizRecordData } from '../models'

const BASE_URL =
  'https://ts-react-quiz-app-default-rtdb.europe-west1.firebasedatabase.app'

export const quizService = createApi({
  reducerPath: 'quizService',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnMountOrArgChange: true,
  endpoints: build => ({
    getAllQuizzes: build.query<QuizRecordData, void>({
      query: () => '/quizzes.json',
    }),
    getQuizById: build.query<QuizRecordData, number>({
      query: id => `/quizzes.json?orderBy="id"&equalTo=${id}`,
    }),
  }),
})

export const { useGetAllQuizzesQuery, useGetQuizByIdQuery } = quizService
