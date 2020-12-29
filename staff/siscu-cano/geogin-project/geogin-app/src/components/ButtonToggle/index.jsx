import React, { useState } from 'react'
import { BtnToggle } from './styles'
import { BiBarcodeReader, BiMap } from 'react-icons/bi'

const ICON_SIZE = '32px'

export const ButtonToggle = ({ onToggleView }) => {
  const [toggle, setToggle] = useState(false)

  const onToggle = () => {
    const _toggle = !toggle
    onToggleView(_toggle)
    setToggle(_toggle)
  }

  return (
    <BtnToggle onClick={onToggle}>

      {toggle
        ? <BiMap size={ICON_SIZE} />
        : <BiBarcodeReader size={ICON_SIZE} />}
    </BtnToggle>
  )
}
