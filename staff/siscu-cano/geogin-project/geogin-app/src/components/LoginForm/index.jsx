import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const LoginForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <form onSubmit={handleSubmit}>
            <input {...email} placeholder='Email' />
            <input {...password} placeholder='Password' type='password' />
            <button>Iniciar sesión</button>
      </form>
    </>
  )
}