import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

const QRCode = require('qrcode.react')

export const FavoritesList = () => {
  useBodyClass('favoriteslist')
  return (
    <>
      <h1>Componente: FavoritesList</h1>
      <QRCode renderAs='svg' value='http://facebook.github.io/react/' />

    </>
  )
}
