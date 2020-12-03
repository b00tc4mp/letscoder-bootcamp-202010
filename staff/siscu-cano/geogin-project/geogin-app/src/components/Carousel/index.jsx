import React from 'react'
import { CarouselWrapper } from './styles'

// Images
import onboardImageOne from '../../assets/images/bg-01-onboarding.png'
import onboardImageTwo from '../../assets/images/bg-02-onboarding.png'
import onboardImageThree from '../../assets/images/bg-03-onboarding.png'

export const Carousel = () => {
  return (
    <>
      <CarouselWrapper className='onboarding'>
        <div className='slider'>
          <div className='slide'>
            <h1>¿Serás capaz de encontrar los QRs ocultos?</h1>
            <img
              className='img chat-bubbles'
              src={onboardImageOne}
              alt='chat bubbles'
            />
            <p>Si no lo consigues podremos darte pistas</p>
          </div>
          <div className='slide'>
            <h1>Organiza tus propias búsquedas</h1>
            <img
              className='img chat-bubbles'
              src={onboardImageTwo}
              alt='chat bubbles'
            />
            <p>Participa en equipo o de forma individual</p>
          </div>
          <div className='slide'>
            <h1>Desenfunda tu movil y se el primero en escanear</h1>
            <img
              className='img chat-bubbles'
              src={onboardImageThree}
              alt='chat bubbles'
            />
            <p>Divierte, mientras descubres sitios nuevos</p>
          </div>
        </div>
        <div className='controls'>
          <form>
            <input type='radio' name='page' checked />
            <label for='page' />
            <input type='radio' name='page' />
            <label for='page' />
            <input type='radio' name='page' />
            <label for='page' />
          </form>
          <a href='#' className='btn-next'>
            Next
          </a>
        </div>
      </CarouselWrapper>
    </>
  )
}
