import React from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import { LoginWrapper } from './styles'

export const Login = () => {
  useBodyClass('login')
  return (
    <LoginWrapper>
      <Logo />
      <LoginForm />
    </LoginWrapper>
  )
}
