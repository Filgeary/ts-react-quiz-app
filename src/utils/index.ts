export const isValidEmail = (str: string) => {
  const rx = /[a-z0-9.]+@[a-z0-9]+\.+[a-z]/gi
  return rx.test(str)
}
