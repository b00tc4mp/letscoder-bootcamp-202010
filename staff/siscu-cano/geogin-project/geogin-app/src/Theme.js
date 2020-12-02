import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    lightBlue: '#AFDBD2'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
