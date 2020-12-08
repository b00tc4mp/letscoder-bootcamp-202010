import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button } from './styles'
import { navigate } from '@reach/router'
import { registerUser } from '../../logic'
import { toast } from 'react-toastify'

export const RegisterForm = () => {
  const fullname = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const repassword = useInputValue('')

  const handleSignUp = event => {
    event.preventDefault()
    try {
      registerUser(fullname.value, email.value, password.value, error => {
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
        navigate('/login')
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
    <>
      <Title>Crea una cuenta <span>(es rápido y fácil)</span></Title>
      <Form onSubmit={handleSignUp}>
        <Input {...fullname} placeholder='Name' />
        <Input {...email} placeholder='Email' />
        <Input {...password} placeholder='Password' type='password' />
        <Input {...repassword} placeholder='Re-password' type='repassword' />
        <Button>Registrar jugador</Button>
      </Form>
    </>

  )
}
