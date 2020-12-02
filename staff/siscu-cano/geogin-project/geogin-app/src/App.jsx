import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { adultTheme, kidTheme } from './theme'
import { useAdultMode } from './hooks/useAdultMode'

// Router
import { Route } from './router/PublicRouter'

// Components
import { ToggleTheme } from './components/ToggleTheme'
import { NavBar } from './components/NavBar'

export const App = () => {
  const [theme, toggleTheme, componentMounted] = useAdultMode()
  const themeMode = theme === 'adultTheme' ? adultTheme : kidTheme
  if (!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Route />
      <NavBar />
    </ThemeProvider>
  )
}
