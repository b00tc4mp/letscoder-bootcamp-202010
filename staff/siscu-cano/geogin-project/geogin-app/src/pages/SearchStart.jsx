import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const SearchStart = () => {
  useBodyClass('searchstart')
  return (
    <>
      <h1>Componente: SearchStart</h1>
    </>
  )
}
