import React from 'react'
import icon from './spinner.svg'
import cls from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={cls.wrapper}>
      <img src={icon} className={cls.icon} alt='spinner-icon' />
    </div>
  )
}

export default Spinner
