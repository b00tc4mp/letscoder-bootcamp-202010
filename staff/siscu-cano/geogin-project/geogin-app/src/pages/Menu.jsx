import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const Menu = () => {
  useBodyClass('menu')
  return (
    <>
      <h1>Componente: Menu</h1>
    </>
  )
}