import { createSlice } from '@reduxjs/toolkit'
import { authService } from '../../services/authService'
import { FbLogInResponse } from '../../typings/fbAuthTypes'
import { RootState } from '../store'

interface State {
  isAuth: boolean
  data: Partial<FbLogInResponse>
}

const initialState = {
  isAuth: false,
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
          state.isAuth = true
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
          state.isAuth = true
        },
      )
      .addMatcher(authService.endpoints.login.matchRejected, (_, action) => {
        console.log('login Reject', action)
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectUserEmail = (state: RootState) => state.auth.data.email
