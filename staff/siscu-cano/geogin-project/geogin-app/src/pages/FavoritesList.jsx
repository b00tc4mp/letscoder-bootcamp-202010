import React, { createRef } from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

const QRCode = require('qrcode.react')

export const FavoritesList = () => {
  const qrRef = createRef()

  useBodyClass('favoriteslist')

  const handleQrCode = () => {
    console.log(qrRef)
    console.log(qrRef.current)
    console.log(qrRef.innerHTML)
  }

  return (
    <>
      <h1>Componente: FavoritesList</h1>
      <div ref={qrRef}>
        <QRCode renderAs='svg' value='http://facebook.github.io/react/' />
      </div>

      <button onClick={handleQrCode}>Focus the text input</button>
    </>
  )
}
