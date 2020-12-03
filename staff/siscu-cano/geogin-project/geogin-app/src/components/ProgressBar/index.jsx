import React from 'react'
import { Progress } from './styles'
import { number } from 'prop-types'

export const ProgressBar = ({ duration }) => {
  const duratiosInSeconds = ((duration % 60000) / 1000).toFixed(0)
  return (
    <Progress duration={`${duratiosInSeconds}s`}>
      <div />
    </Progress>
  )
}

ProgressBar.propTypes = {
  duration: number.isRequired
}
