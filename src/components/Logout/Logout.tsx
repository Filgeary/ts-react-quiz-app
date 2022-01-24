import React from 'react'
import Button from '../../ui/Button/Button'

interface Props {
  onLogout: () => void
}

const Logout = ({ onLogout }: Props) => {
  return (
    <>
      <p style={{ marginBottom: 20 }}>Would you like to Logout?</p>
      <Button onClickButton={onLogout} variant={'error'}>
        Logout
      </Button>
    </>
  )
}

export default Logout
