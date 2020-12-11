import React from 'react'
import { StepperWrapper } from './styles'

export const Stepper = ({ onStepChange, steps }) => {
  return (
    <StepperWrapper>
      <div className='Stepper'>
        {[...Array(steps)].map((value, index) =>
          <div className={'Stepper__step' + (onStepChange === index ? ' is-active' : '') + (onStepChange > index ? ' is-complete' : '')} key={++index}>
            <div className='Stepper__indicator'>
              <span className='Stepper__info'>{index}</span>
            </div>
          </div>
        )}
      </div>
    </StepperWrapper>
  )
}
