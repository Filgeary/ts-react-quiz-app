export interface IInputControl {
  type: 'text' | 'email' | 'password' | string
  label: string
  value: string
  errorMessage: string
  isValid: boolean
  isTouched: boolean
  validation: {
    isRequired: boolean
    options?: {
      isEmail?: boolean
      minLength?: number
    }
  }
}
