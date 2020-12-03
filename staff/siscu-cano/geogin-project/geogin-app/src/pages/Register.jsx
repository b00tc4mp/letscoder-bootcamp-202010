import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { RegisterForm } from '../components/RegisterForm'
import { Logo } from '../components/Logo'

export const Register = () => {
  useBodyClass('register')
  return (
    <>
      <Logo />
      <RegisterForm />
    </>
  )
}
