import React from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { RegisterForm } from '../../components/RegisterForm'
import { Logo } from '../../components/Logo'
import { RegisterWrapper } from './styles'

export const Register = () => {
  useBodyClass('register')
  return (
    <RegisterWrapper>
      <Logo />
      <RegisterForm />
    </RegisterWrapper>
  )
}
