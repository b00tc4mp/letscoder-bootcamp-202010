import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const SearchList = () => {
  useBodyClass('searchlist')
  return (
    <>
      <h1>Componente: SearchList</h1>
    </>
  )
}