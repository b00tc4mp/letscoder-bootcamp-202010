import React, { useState, useEffect } from 'react'
import { Redirect } from '@reach/router'

import { useBodyClass } from '../hooks/useBodyClass'

import { Logo } from '../components/Logo'
import { ProgressBar } from '../components/ProgressBar'
import { Qrcode } from '../components/Qrcode'

export const SplashScreen = () => {
  const [loading, setLoading] = useState(true)
  const TIME_FAKE = 3000

  useEffect(() => {
    setTimeout(() => setLoading(false), TIME_FAKE)
  }, [])

  useBodyClass('splashscreen')
  return (
    <>
      {loading === true
        ? (
          <div>
            <Logo />
            <Qrcode />
            <ProgressBar duration={TIME_FAKE} />
          </div>
          )
        : (
          <Redirect noThrow to='/onboarding' />
          )}
    </>
  )
}
