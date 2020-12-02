import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

import { Logo } from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar'
import { Qrcode } from '../components/Qrcode'

export const SplashScreen = () => {
  useBodyClass('splashscreen')
  return (
    <div>
      <Logo />
      <Qrcode />
      <ProgressBar done={50} />
    </div>
  )
}
