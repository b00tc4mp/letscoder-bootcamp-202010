import React from 'react'
import { Logo } from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar'

export const SplashScreen = () => {
  return (
    <div>
      <Logo />
      <ProgressBar done={50} />
    </div>
  )
}
