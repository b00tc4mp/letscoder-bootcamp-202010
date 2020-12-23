import React, { useState } from 'react'
import { UploadImageWrapper } from './styles'
import ImageUploader from 'react-images-upload'
import { toast } from 'react-toastify'
import NoImage from '../../assets/images/no-image.png'
import { FcHighPriority } from 'react-icons/fc'

// Test
import { uploadImage } from '../../logic'

const ICON_SIZE = '22px'

export const UploadImage = ({ onUploadImage, className, preview = true, previewImage, withIcon = true, withLabel = true }) => {
  const [pictures, setPictures] = useState([])
  const [cloudinaryPicture, setCloudinaryPicture] = useState()

  const handleUploadImage = picture => {
    setPictures([...pictures, picture])
    try {
      uploadImage(picture, (error, response) => {
        if (error) {
          return toast.error(<span><FcHighPriority size={ICON_SIZE} />{error.message}</span>)
        } else {
          setCloudinaryPicture(response)
          onUploadImage(response)
        }
      })
    } catch (error) {
      toast.error(<span><FcHighPriority size={ICON_SIZE} />{error.message}</span>)
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
