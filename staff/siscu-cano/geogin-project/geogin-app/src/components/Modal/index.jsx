import React from 'react'
import PropTypes from 'prop-types'
import { ModalWrapper } from './styles'

export const Modal = ({ handleClose, show, children }) => {
  return (
    !show ? null
      : <ModalWrapper>
        <section className='modal'>
          <button onClick={handleClose}>close</button>
          {children}
        </section>
      </ModalWrapper>
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}
