import React from 'react'
import Logout from '../../components/Logout/Logout'
import { useAppDispatch } from '../../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { clearAuthLocalStorage, logout } from '../../store/slices/authSlice'
import { AppRoute } from '../../constants'

const LogoutCont = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearAuthLocalStorage())
    navigate(AppRoute.HOME)
  }

  return (
    <div>
      <Logout onLogout={handleLogout} />
    </div>
  )
}

export default LogoutCont
