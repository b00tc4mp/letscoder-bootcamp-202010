import React, { useState } from 'react'
import { UploadImageWrapper } from './styles'
import ImageUploader from 'react-images-upload'
import { toast } from 'react-toastify'
import NoImage from '../../assets/images/no-image.png'

// Test
import { uploadImage } from '../../logic'

export const UploadImage = ({ onUploadImage, className, preview = true, previewImage, withIcon = true, withLabel = true }) => {
  const [pictures, setPictures] = useState([])
  const [cloudinaryPicture, setCloudinaryPicture] = useState()

  const handleUploadImage = picture => {
    setPictures([...pictures, picture])
    try {
      uploadImage(picture, (error, response) => {
        if (error) {
          toast.error(`⛔️ a${error.message}!`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          })
        } else {
          setCloudinaryPicture(response)
          onUploadImage(response)
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
        withIcon={withIcon}
        singleImage
        withLabel={withLabel}
        className={className}
        onChange={handleUploadImage}
        buttonText='Subir imagen'
        label='Imagen de portada en la búsqueda'
        imgExtension={['.jpg', '.png', '.gif']}
        maxFileSize={5242880}
        fileSizeError='La imagen no debe exceder los 5 megas'
      />
      {preview &&
        <div className='preview'>
          {previewImage ? <img src={previewImage} /> : <img src={NoImage} />}
        </div>}
    </UploadImageWrapper>

  )
}
