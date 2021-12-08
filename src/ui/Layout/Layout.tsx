import React from 'react'
import cls from './Layout.module.css'

const Layout: React.FC = ({ children }) => (
  <div className={cls.wrapper}>
    <main className={cls.main}>{children}</main>
  </div>
)

export default Layout
