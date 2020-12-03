import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import Context from '../../Context'
import { Title, Form, Input, Button } from './styles'

export const RegisterForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const repassword = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Context.Consumer>
      {({ isAuth }) => {
        console.log(isAuth)
        return (
          <>
            <Title>Crea una cuenta <span>(es rápido y fácil)</span></Title>
            <Form onSubmit={handleSubmit}>
              <Input {...email} placeholder='Email' />
              <Input {...password} placeholder='Password' type='password' />
              <Input {...repassword} placeholder='Re-password' type='repassword' />
              <Button>Registrar jugador</Button>
            </Form>
          </>
        )
      }}
    </Context.Consumer>
  )
}
