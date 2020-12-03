import React from 'react'
import Slider from 'react-slick'
import { SliderWrapper } from './styles'
// Images
import onboardImageOne from '../../assets/images/bg-01-onboarding.png'
import onboardImageTwo from '../../assets/images/bg-02-onboarding.png'
import onboardImageThree from '../../assets/images/bg-03-onboarding.png'

export const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <h1>¿Serás capaz de encontrar los QRs ocultos?</h1>
          <img
            className='img chat-bubbles'
            src={onboardImageOne}
            alt='chat bubbles'
          />
          <p>Si no lo consigues podremos darte pistas</p>
        </div>
        <div>
          <h1>Organiza tus propias búsquedas</h1>
          <img
            className='img chat-bubbles'
            src={onboardImageTwo}
            alt='chat bubbles'
          />
          <p>Participa en equipo o de forma individual</p>

        </div>
        <div>
          <h1>Desenfunda tú móvil y se el primero en escanear</h1>
          <img
            className='img chat-bubbles'
            src={onboardImageThree}
            alt='chat bubbles'
          />
          <p>Diviértete, mientras descubres sitios nuevos</p>

        </div>

      </Slider>
    </SliderWrapper>
  )
}
