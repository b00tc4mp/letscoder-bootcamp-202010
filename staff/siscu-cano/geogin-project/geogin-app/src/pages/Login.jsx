import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const Login = () => {
  useBodyClass('login')
  return (
    <>
      <h1>Componente: Login</h1>
    </>
  )
}
