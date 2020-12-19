import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { adultTheme, kidTheme } from './theme'
import { useAdultMode } from './hooks/useAdultMode'

// Router
import { PublicRoute } from './router/PublicRouter'

// Components
import { ToggleTheme } from './components/ToggleTheme'
import { NavBar } from './components/NavBar'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const [theme, toggleTheme, componentMounted] = useAdultMode()
  const themeMode = theme === 'adultTheme' ? adultTheme : kidTheme
  if (!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      {/* <ToggleTheme theme={theme} toggleTheme={toggleTheme} /> */}
      <GlobalStyle />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable={false}
      />
      <PublicRoute />
      <NavBar />
    </ThemeProvider>
  )
}
