import React from 'react'
import cls from './Layout.module.css'

const Layout: React.FC = ({ children }) => (
  <div className={cls.wrapper}>
    <div className={cls.content}>{children}</div>
  </div>
)

export default Layout
