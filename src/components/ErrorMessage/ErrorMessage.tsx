import React from 'react'
import cls from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={cls.wrapper}>
      <p className={cls.content}>
        Oops! Something Wrong! <br />
        Please, try again later.
      </p>
    </div>
  )
}

export default ErrorMessage
