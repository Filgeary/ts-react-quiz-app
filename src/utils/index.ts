import {
  IInputControl,
  IInputControlConfig,
  IInputControlValidation,
} from '../typings'

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
