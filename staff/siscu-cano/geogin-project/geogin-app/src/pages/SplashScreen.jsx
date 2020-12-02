import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

import { Logo } from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar'

export const SplashScreen = () => {
  useBodyClass('splashscreen')
  return (
    <div>
      <Logo />
      <ProgressBar done={50} />
    </div>
  )
}
