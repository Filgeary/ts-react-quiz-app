import { createSlice } from '@reduxjs/toolkit'
import { authService } from '../../services/authService'
import { FbLogInResponse, FbSignUpResponse } from '../../typings/fbAuthTypes'
import { RootState } from '../store'

interface State {
  data: FbLogInResponse | FbSignUpResponse
}

const setAuthDataToLocalStorage = (data: FbSignUpResponse): void => {
  if (!data) return
  const expirationDate = new Date().getTime() + Number(data.expiresIn) * 1000

  localStorage.setItem('token', data.idToken)
  localStorage.setItem('email', data.email)
  localStorage.setItem('userId', data.localId)
  localStorage.setItem('expirationDate', String(expirationDate))
}

const clearAuthDataFromLocalStorage = (): void => {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
}

const initialState = {
  data: {
    idToken: '',
    email: '',
    refreshToken: '',
    expiresIn: '',
    localId: '',
    displayName: '',
    registered: false,
  },
} as State

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    clearAuthLocalStorage: () => clearAuthDataFromLocalStorage(),
  },
  extraReducers: builder => {
    builder
      // signup
      .addMatcher(authService.endpoints.signup.matchPending, (_, action) => {
        console.log('signup Pending...', action)
      })
      .addMatcher(
        authService.endpoints.signup.matchFulfilled,
        (state, action) => {
          console.log('signup Fulfilled', action)
          state.data = { ...action.payload }
          setAuthDataToLocalStorage(action.payload)
        },
      )
      .addMatcher(authService.endpoints.signup.matchRejected, (_, action) => {
        console.log('signup Reject', action)
      })
      // login
      .addMatcher(authService.endpoints.login.matchPending, (_, action) => {
        console.log('login Pending...', action)
      })
      .addMatcher(
        authService.endpoints.login.matchFulfilled,
        (state, action) => {
          console.log('login Fulfilled', action)
          state.data = { ...action.payload }
          setAuthDataToLocalStorage(action.payload)
        },
      )
      .addMatcher(authService.endpoints.login.matchRejected, (_, action) => {
        console.log('login Reject', action)
      })
  },
})

export const { logout, clearAuthLocalStorage } = authSlice.actions
export default authSlice.reducer

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.data.idToken)
export const selectUserEmail = (state: RootState) => state.auth.data.email
export const selectUserData = (state: RootState) => state.auth.data
