import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { LoginForm } from '../components/LoginForm'
import { Logo } from '../components/Logo'

export const Login = () => {
  useBodyClass('login')
  return (
    <>
      <Logo />
      <LoginForm />
    </>
  )
}
