import React from 'react'
import cls from './Backdrop.module.css'

type Props = {
  onClickBackdrop: () => void
}

const Backdrop = (props: Props) => {
  const { onClickBackdrop } = props

  return <div className={cls.wrapper} onClick={onClickBackdrop} />
}

export default Backdrop
