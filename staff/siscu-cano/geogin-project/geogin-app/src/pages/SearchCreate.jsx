import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { UploadImage } from '../components/UploadImage'

export const SearchCreate = () => {
  useBodyClass('searchcreate')
  return (
    <>
      <h1>Componente: SearchCreate</h1>
      <UploadImage />
    </>
  )
}
