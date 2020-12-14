import React from 'react'
import LogoImage from '../../assets/images/logo.png'
import { PrintItemWrapper } from './styles'

class PrintItem extends React.Component {
  render () {
    return (
      <PrintItemWrapper>
        <img className='print-source' src={LogoImage} />
      </PrintItemWrapper>
    )
  }
}

export default PrintItem
