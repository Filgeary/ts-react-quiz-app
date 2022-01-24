import React from 'react'
import NavBar from '../../ui/NavBar/NavBar'
import { useAppSelector } from '../../hooks/hooks'
import { selectIsAuth } from '../../store/slices/authSlice'

const NavBarCont = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return (
    <>
      <NavBar isAuth={isAuth} />
    </>
  )
}

export default NavBarCont
