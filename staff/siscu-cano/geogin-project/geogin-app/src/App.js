import React from 'react'
import GlobalStyle from './globalStyle'
import { ProgressBar } from './components/ProgressBar'

export const App = () => (
  <>
    <GlobalStyle />
    <ProgressBar done='50' />
  </>

)
