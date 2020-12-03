import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import Context from '../../Context'
import { Title, Anchor, Form, Input, Button } from './styles'

export const LoginForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <Title>Iniciar sesión en <span>GeoGin</span></Title>
            <Form onSubmit={activateAuth}>
              <Input {...email} placeholder='Email' />
              <Input {...password} placeholder='Password' type='password' />
              <Button>Entrar</Button>
              <Anchor to='/register'>
                ¿Necesitas crear una cuenta?
              </Anchor>
            </Form>
          </>
        )
      }}
    </Context.Consumer>
  )
}
