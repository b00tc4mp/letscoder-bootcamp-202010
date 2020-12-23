import React, { useState, useEffect } from 'react'
import { QrReaderWrapper } from './styles'
import QrReader from 'react-qr-reader'
import { toast } from 'react-toastify'
import { FcHighPriority } from 'react-icons/fc'
import { Expire } from '../Expire'

const ICON_SIZE = '22px'

export const QrScanner = ({ game }) => {
  const [result, setResult] = useState()
  const [winner, setWinner] = useState()

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }

  const handleError = error => {
    toast.error(<span><FcHighPriority size={ICON_SIZE} />{error}</span>)
  }

  const some = (object, property, value) => {
    return object[property] === value || Object.keys(object).some(function (k) {
      return object[k] && typeof object[k] === 'object' && some(object[k], property, value)
    })
  }

  useEffect(() => {
    if (result) {
      setWinner(some(game, 'qr', result))
      console.log(result)
    }
  }, [result])

  return (
    <>
      <QrReaderWrapper>
        <QrReader
          className='qr-scanner'
          delay={300}
          onError={handleError}
          onScan={handleScan}
        />
        {winner === true && <Expire delay="5000"><p className='winner'>Has superador la prueba!!!!</p></Expire>}
        {winner === false && <Expire delay="5000"><p className='looser'>Sigue buscando 'my friend', este QR va a ser que no es el bueno!!!!</p></Expire>}
      </QrReaderWrapper>
    </>
  )
}
