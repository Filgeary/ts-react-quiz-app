import {
  IInputControl,
  IInputControlConfig,
  IInputControlValidation,
} from '../typings'

type ValidateInput = Pick<IInputControl, 'value' | 'validation'>

export const isValidEmail = (str: string) => {
  const rx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  return rx.test(str)
}

export const createControl = (
  config: IInputControlConfig,
  validation?: IInputControlValidation,
) => {
  return {
    ...config,
    validation,
    value: '',
    isValid: !validation,
    isTouched: false,
  } as IInputControl
}

export const validateInput = ({ value, validation }: ValidateInput) => {
  if (!validation) return true

  let isValid = true

  if (validation.isRequired) {
    isValid = value.trim() !== '' && isValid
  }
  if (validation.options?.isEmail) {
    isValid = isValidEmail(value) && isValid
  }
  if (validation.options?.minLength) {
    isValid = value.trim().length >= validation.options.minLength
  }

  return isValid
}

export const validateForm = (...controls: IInputControl[]) => {
  let isValidForm = true

  controls.forEach(control => (isValidForm = control.isValid && isValidForm))
  return isValidForm
}
