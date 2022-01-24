import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '../../services/authService'
import { FbLogInResponse, FbSignUpResponse } from '../../typings/fbAuthTypes'
import { RootState } from '../store'

interface State {
  data: FbLogInResponse | FbSignUpResponse
}
type BaseState = Pick<FbSignUpResponse, 'idToken' | 'email' | 'localId'>

const setAuthDataToLocalStorage = (data: FbSignUpResponse): void => {
  if (!data) return
  const expirationDate = new Date().getTime() + Number(data.expiresIn) * 1000

  localStorage.setItem('idToken', data.idToken)
  localStorage.setItem('email', data.email)
  localStorage.setItem('localId', data.localId)
  localStorage.setItem('expirationDate', String(expirationDate))
}

const clearAuthDataFromLocalStorage = (): void => {
  localStorage.removeItem('idToken')
  localStorage.removeItem('email')
  localStorage.removeItem('localId')
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
    autoLogin: (state, action: PayloadAction<BaseState>) => {
      state.data.idToken = action.payload.idToken
      state.data.email = action.payload.email
      state.data.localId = action.payload.localId
    },
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

export const { logout, clearAuthLocalStorage, autoLogin } = authSlice.actions
export default authSlice.reducer

export const selectIsAuth = (state: RootState) =>
  Boolean(state.auth.data.idToken)
export const selectUserEmail = (state: RootState) => state.auth.data.email
export const selectUserData = (state: RootState) => state.auth.data
