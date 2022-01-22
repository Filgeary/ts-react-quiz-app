import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  FbLogInRequest,
  FbLogInResponse,
  FbSignUpRequest,
  FbSignUpResponse,
} from '../typings/firebaseAuth'

// Firebase Public ApiKey
const API_KEY = process.env.REACT_APP_DB_API_KEY
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1'

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: build => ({
    signup: build.mutation<FbSignUpResponse, FbSignUpRequest>({
      query: body => ({
        url: `/accounts:signUp?key=${API_KEY}`,
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<FbLogInResponse, FbLogInRequest>({
      query: body => ({
        url: `/accounts:signInWithPassword?key=${API_KEY}`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSignupMutation, useLoginMutation } = authService
