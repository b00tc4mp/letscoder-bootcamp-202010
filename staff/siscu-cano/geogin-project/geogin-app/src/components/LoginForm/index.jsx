import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import Context from '../../Context'

export const LoginForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (

    <Context.Consumer>
      {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <input {...email} placeholder='Email' />
            <input {...password} placeholder='Password' type='password' />
            <button>Iniciar sesión</button>
          </form>
        )
      }
    }
    </Context.Consumer>
  )
}
