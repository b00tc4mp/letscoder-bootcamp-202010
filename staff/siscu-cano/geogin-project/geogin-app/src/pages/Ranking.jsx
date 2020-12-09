import React from 'react'

import { useBodyClass } from '../hooks/useBodyClass'
import { MapGetPos } from '../components/MapGetPos'

export const Ranking = () => {
  useBodyClass('ranking')
  return (
    <>
      <h1>Componente: Ranking</h1>
      <MapGetPos />
    </>
  )
}
