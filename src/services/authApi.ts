import axios from 'axios'
import {
  FbLogInRequest,
  FbLogInResponse,
  FbSignUpRequest,
  FbSignUpResponse,
} from '../typings/fbAuthTypes'

// Firebase Public ApiKey
const API_KEY = process.env.REACT_APP_DB_API_KEY

// axios config
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1'
const REQUEST_TIMEOUT = 5000

const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })
}
const authApi = createAPI()

export const signUp = async (data: FbSignUpRequest) => {
  return await authApi.post<FbSignUpResponse>(
    `/accounts:signUp?key=${API_KEY}`,
    data,
  )
}

export const logIn = async (data: FbLogInRequest) => {
  return await authApi.post<FbLogInResponse>(
    `/accounts:signInWithPassword?key=${API_KEY}`,
    data,
  )
}
