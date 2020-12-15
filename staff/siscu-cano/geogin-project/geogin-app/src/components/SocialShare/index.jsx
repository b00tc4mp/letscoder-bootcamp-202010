import React from 'react'
import { WrapShareButtons } from './styles'

import {
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'

export const SocialShare = ({ gameId }) => {
  return (
    <>
      <WrapShareButtons>
        <WhatsappShareButton
          title='Geogin app te comparte el código de la búsqueda: '
          url={gameId}
        >
          <WhatsappIcon size={18} round /> Compartir el código de la búsqueda
        </WhatsappShareButton>
      </WrapShareButtons>

    </>
  )
}
