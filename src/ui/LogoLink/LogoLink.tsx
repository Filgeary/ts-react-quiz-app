import { Link } from 'react-router-dom'
import React from 'react'
import cls from './LogoLink.module.css'

type Props = {
  title: string
}

export const LogoLink = (props: Props) => {
  const { title } = props

  return (
    <Link to='/' className={cls.link}>
      <h1>{title}</h1>
    </Link>
  )
}
