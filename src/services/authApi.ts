import axios from 'axios'
import {
  FbLogInRequest,
  FbLogInResponse,
  FbSignUpRequest,
  FbSignUpResponse,
} from '../typings/firebaseAuth'

/*
 * Firebase Public ApiKey
 * replace it with Your ApiKey (if you forked this project)
 */
const API_KEY = 'AIzaSyCzoEd5g7a0BykR3RqkB2oPgRJW0p7Pc_0'

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
