
import React from 'react'
import ReactToPrint from 'react-to-print'

import { MenuListWrapper, Link } from './styles'
import { RiTeamLine, RiStackshareLine, RiPrinterFill, RiGamepadLine } from 'react-icons/ri'
import PrintItem from '../../components/PrintItem'
import { retrieveGame } from '../../logic'

const QRCode = require('qrcode.react')

const ICON_SIZE = '14px'

export class SearchCreateMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      game: {},
      isLoading: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    try {
      retrieveGame(this.props.questId, (error, game) => {
        if (error) return window.alert('Return' + error.message)

        // this.setState({ isLoading: false })
        this.setState({ game })
      })
    } catch (error) {
      window.alert('Catch' + error.message)
    }
  }

  render () {
    return (
      <div>
        <PrintItem ref={(el) => (this.componentRef = el)} />

        <MenuListWrapper>
          <div className='Menu'>
            <Link to='/search-access'><RiTeamLine className='Menu-Icon' size={ICON_SIZE} />Crear equipos</Link>
            <Link to='/search-create'><RiStackshareLine className='Menu-Icon' size={ICON_SIZE} />Enviar invitaciones</Link>
            <ReactToPrint
              trigger={() => <Link to='#'><RiPrinterFill className='Menu-Icon' size={ICON_SIZE} />Imprimir Qr Codes <span>(pruebas)</span></Link>}
              content={() => this.componentRef}
            />
            <Link to='/ranking'><RiGamepadLine className='Menu-Icon' size={ICON_SIZE} />Iniciar el juego</Link>
          </div>

          <h2>Código de la búsqueda:</h2>
          <h3>{this.props.questId}</h3>

          {this.state.game.qrCode &&
            <QRCode
              className='qr-game'
              value={this.state.game.qrCode}
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
            />}
          <p>Comparte con tus amigos el QR o el código de la búsqueda para que puedan participar en el juego.</p>
        </MenuListWrapper>
      </div>
    )
  }
}
