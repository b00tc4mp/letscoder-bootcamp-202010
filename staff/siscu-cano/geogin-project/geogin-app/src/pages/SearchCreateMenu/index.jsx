import React from 'react'
import { MenuListWrapper, Link } from './styles'
import { RiTeamLine, RiStackshareLine, RiPrinterFill, RiGamepadLine } from 'react-icons/ri'
import { useBodyClass } from '../../hooks/useBodyClass'
const QRCode = require('qrcode.react')

const ICON_SIZE = '14px'

export const SearchCreateMenu = ({ questId }) => {
  useBodyClass('menu')
  return (
    <>
      <MenuListWrapper>
        <div className='Menu'>
          <Link to='/search-access'><RiTeamLine className='Menu-Icon' size={ICON_SIZE} />Crear equipos</Link>
          <Link to='/search-create'><RiStackshareLine className='Menu-Icon' size={ICON_SIZE} />Enviar invitaciones</Link>
          <Link to='/search-list'><RiPrinterFill className='Menu-Icon' size={ICON_SIZE} />Imprimir Qr Codes <span>(pruebas)</span></Link>
          <Link to='/ranking'><RiGamepadLine className='Menu-Icon' size={ICON_SIZE} />Iniciar el juego</Link>
        </div>

        <h2>Código de la búsqueda:</h2>
        <h3>{questId}</h3>

        <QRCode
          className='qr-game'
          value='http://picturesofpeoplescanningqrcodes.tumblr.com/'
          size={256}
          bgColor='#ffffff'
          fgColor='#000000'
          level='L'
          includeMargin={false}
          renderAs='svg'
          imageSettings={{
            src: 'https://i.imgur.com/YGbACOg.png',
            x: null,
            y: null,
            height: 32,
            width: 96,
            excavate: false
          }}
        />
        <p>Comparte con tus amigos el QR o el código de la búsqueda para que puedan participar en el juego.</p>
      </MenuListWrapper>

    </>
  )
}
