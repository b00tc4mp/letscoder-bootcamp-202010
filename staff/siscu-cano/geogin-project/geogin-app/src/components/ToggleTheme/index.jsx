import React from 'react'
import { func } from 'prop-types'

export const ToggleTheme = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      a b
    </button>
  )
}

ToggleTheme.propTypes = {
  toggleTheme: func.isRequired
}
