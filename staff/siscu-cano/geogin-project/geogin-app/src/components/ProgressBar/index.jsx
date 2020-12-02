import React from 'react'
import { Progress } from './styles'
import { number } from 'prop-types'

export const ProgressBar = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle)
  }, 200)

  return (
    <Progress>
      <div style={style} />
    </Progress>
  )
}

ProgressBar.propTypes = {
  done: number.isRequired
}
