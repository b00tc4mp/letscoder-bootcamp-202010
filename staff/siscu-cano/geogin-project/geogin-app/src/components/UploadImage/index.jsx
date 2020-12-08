import React, { useState } from 'react'
import { UploadImageWrapper } from './styles'
import ImageUploader from 'react-images-upload'
import { toast } from 'react-toastify'
import NoImage from '../../assets/images/no-image.png'

// Test
import { uploadImage } from '../../logic'

export const UploadImage = () => {
  const [pictures, setPictures] = useState([])
  const [previewUrl, setPreviewUrl] = useState([NoImage])

  const handleUploadImage = picture => {
    setPictures([...pictures, picture])

    try {
      uploadImage(picture, (error, response) => {
        console.log(error)
        console.log(response)
        if (error) {
          console.log(error)
          toast.error(`⛔️ a${error.message}!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          })
        } else {
          console.log(response.uploadResponse.url)
          setPreviewUrl(response.uploadResponse.url)
        }
      })
    } catch (error) {
      toast.error(`⛔️ b${error.message}!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      })
    }
  }

  return (
    <UploadImageWrapper>
      <ImageUploader
        withIcon
        singleImage
        withLabel
        onChange={handleUploadImage}
        buttonText='Subir imagen'
        label='Imagen de portada en la búsqueda'
        imgExtension={['.jpg', '.png', '.gif']}
        maxFileSize={5242880}
        fileSizeError='La imagen no debe exceder los 5 megas'
      />
      <div className='preview'>
        <img src={previewUrl} />
      </div>
    </UploadImageWrapper>

  )
}
