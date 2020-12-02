import React from 'react'
import { Progress } from './styles'
import { func } from 'prop-types'

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
  done: func.isRequired
}
