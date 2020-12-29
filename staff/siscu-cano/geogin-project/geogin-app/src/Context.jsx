import React, { createContext, useState } from 'react'
import { navigate } from '@reach/router'

const Context = createContext()

export const Provider = ({ children }) => {
  const initialAuth = Boolean(window.sessionStorage.token)
  const [isAuth, setIsAuth] = useState(initialAuth)

  const value = {
    isAuth,
    activateAuth: (token) => {
      window.sessionStorage.token = token
      setIsAuth(true)
      navigate('/menu')
    },
    disableAuth: (token) => {
      window.sessionStorage.removeItem(token)
      setIsAuth(false)
      navigate('/login')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}
