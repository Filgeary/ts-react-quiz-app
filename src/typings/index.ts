export interface IInputControl extends IInputControlConfig {
  value: string
  isValid: boolean
  isTouched: boolean
  validation: IInputControlValidation
}

export interface IInputControlConfig {
  type: 'text' | 'email' | 'password' | string
  label: string
  errorMessage: string
}

export interface IInputControlValidation {
  isRequired: boolean
  options?: {
    isEmail?: boolean
    minLength?: number
  }
}
