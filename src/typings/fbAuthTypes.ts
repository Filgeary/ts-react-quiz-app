// signUp
export interface FbSignUpRequest {
  email: string
  password: string
  returnSecureToken: boolean
}
export interface FbSignUpResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

// logIn
export interface FbLogInRequest extends FbSignUpRequest {}
export interface FbLogInResponse extends FbSignUpResponse {
  displayName: string
  registered: boolean
}

// error
export interface FbAuthError {
  status: number
  data: {
    error: {
      code: number
      message: string
      errors: [
        {
          domain: string
          reason: string
          message: string
        },
      ]
    }
  }
}
