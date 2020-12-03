import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { Carousel } from '../components/Carousel'

export const Onboarding = () => {
  useBodyClass('onboarding')
  return (
    <>
      <Carousel />
    </>
  )
}
