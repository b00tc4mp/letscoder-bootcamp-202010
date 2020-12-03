import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
  useBodyClass('login')
  return (
    <>
      <h1>Componente: Login</h1>
      <LoginForm />
    </>
  )
}
