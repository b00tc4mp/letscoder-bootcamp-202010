import React from 'react'
import { StepperWrapper } from './styles'

export const Stepper = () => {
  return (
    <StepperWrapper>
      <div className='Stepper'>

        <div className='Stepper__step is-complete'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>1</span>
          </div>
          <div className='Stepper__label'>Prueba 1</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>2</span>
          </div>
          <div className='Stepper__label'>Prueba 2</div>
        </div>
        <div className='Stepper__step is-warning'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>3</span>
          </div>
          <div className='Stepper__label'>Prueba 3</div>
        </div>
        <div className='Stepper__step is-error'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>4</span>
          </div>
          <div className='Stepper__label'>Prueba 4</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>5</span>
          </div>
          <div className='Stepper__label'>Prueba 5</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>6</span>
          </div>
          <div className='Stepper__label'>Prueba 6</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>7</span>
          </div>
          <div className='Stepper__label'>Prueba 7</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>8</span>
          </div>
          <div className='Stepper__label'>Prueba 8</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>9</span>
          </div>
          <div className='Stepper__label'>Prueba 9</div>
        </div>
        <div className='Stepper__step is-active'>
          <div className='Stepper__indicator'>
            <span className='Stepper__info'>10</span>
          </div>
          <div className='Stepper__label'>Prueba 10</div>
        </div>

      </div>
    </StepperWrapper>
  )
}
