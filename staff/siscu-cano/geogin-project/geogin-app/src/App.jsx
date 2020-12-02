import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { adultTheme, kidTheme } from './theme'
import { ProgressBar } from './components/ProgressBar'
import { ToggleTheme } from './components/ToggleTheme'
import { useAdultMode } from './hooks/useAdultMode'

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
      <ProgressBar done={50} />
    </ThemeProvider>
  )
}
