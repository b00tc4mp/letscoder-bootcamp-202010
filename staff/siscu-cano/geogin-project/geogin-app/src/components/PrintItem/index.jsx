import React from 'react'
import LogoImage from '../../assets/images/logo.png'
import { PrintItemWrapper } from './styles'
const QRCode = require('qrcode.react')

class PrintItem extends React.Component {
  render () {
    return (
      <PrintItemWrapper>
        <img className='logo' src={LogoImage} />

        <h1>Bienvenido a la: {this.props.game.title}</h1>
        <p>Lo primero que deberás hacer como organizador de la partida, será esconder los QRs en los sitios oportunos.'</p>

        <p>Listado de QRs con pruebas asociadas:</p>
        {console.log(this.props.game.quest)}
        {this.props.game && this.props.game.quest && this.props.game.quest.map((quest, index) =>
          <div className='card' key={index}>
            <h2>Prueba 1: {quest.titleTest}</h2>
            <p>{quest.descTest}</p>
            <QRCode
              className='card-qr'
              value={quest.qrTest}
              size={180}
              bgColor='#ffffff'
              fgColor='#000000'
              level='L'
              includeMargin={false}
              renderAs='svg'
            />
          </div>)}

      </PrintItemWrapper>
    )
  }
}

export default PrintItem
