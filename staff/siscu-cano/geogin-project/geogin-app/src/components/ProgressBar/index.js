import React from 'react'
import { Progress } from './styles'

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
