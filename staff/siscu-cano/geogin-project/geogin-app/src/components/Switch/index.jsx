import React from 'react'
import { SwitchWrapper } from './styles'

export const Switch = ({ isOn, handleToggle, onColor }) => {
  const id = Math.random()
  return (
    <SwitchWrapper>
      <input
        checked={isOn}
        onChange={() => handleToggle()}
        className='react-switch-checkbox'
        id={id}
        type='checkbox'
      />
      <label
        style={{ background: isOn && onColor }}
        className='react-switch-label'
        htmlFor={id}
      >
        <span className='react-switch-button' />
      </label>
    </SwitchWrapper>
  )
}
