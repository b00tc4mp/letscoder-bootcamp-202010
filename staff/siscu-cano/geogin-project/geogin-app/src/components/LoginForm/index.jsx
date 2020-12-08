import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import Context from '../../Context'
import { Title, Anchor, Form, Input, Button } from './styles'
import { authenticateUser } from '../../logic'
import { toast } from 'react-toastify'

export const LoginForm = () => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSignIn = (event, activateAuth) => {
    event.preventDefault()
    try {
      authenticateUser(email.value, password.value, (error, token) => {
        if (error) {
          return toast.error(`⛔️ ${error.message}!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          })
        }
        activateAuth(token)
      })
    } catch (error) {
      toast.error(`⛔️ ${error.message}!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      })
    }
  }

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <Title>Iniciar sesión en <span>GeoGin</span></Title>
            <Form onSubmit={(event) => { handleSignIn(event, activateAuth) }}>
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
