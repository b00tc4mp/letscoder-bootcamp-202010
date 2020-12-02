import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const FavoritesList = () => {
  useBodyClass('favoriteslist')
  return (
    <>
      <h1>Componente: FavoritesList</h1>
    </>
  )
}