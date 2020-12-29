import React from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { Carousel } from '../../components/Carousel'
import { OnboardWrapper } from './styles'

export const Onboarding = () => {
  useBodyClass('onboarding')
  return (
    <OnboardWrapper>
      <Carousel />
    </OnboardWrapper>
  )
}
