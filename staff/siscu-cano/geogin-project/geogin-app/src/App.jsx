import React from 'react'
import GlobalStyle from './globalStyle'
import Theme from './Theme'
import { ProgressBar } from './components/ProgressBar'

export const App = () => (
  <Theme>
    <GlobalStyle />
    <ProgressBar done='50' />
  </Theme>

)
