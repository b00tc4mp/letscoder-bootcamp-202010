import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const Profile = () => {
  useBodyClass('profile')
  return (
    <>
      <h1>Componente: Profile</h1>
    </>
  )
}