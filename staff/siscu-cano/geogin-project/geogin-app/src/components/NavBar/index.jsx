import React from 'react'
import { FcHome, FcLike, FcBullish, FcPortraitMode } from 'react-icons/fc'

import { Button, Nav } from './styles'

const ICON_SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Button to='/menu'><FcHome size={ICON_SIZE} /></Button>
      <Button to='/favorites'><FcLike size={ICON_SIZE} /></Button>
      <Button to='/ranking'><FcBullish size={ICON_SIZE} /></Button>
      <Button to='/profile'><FcPortraitMode size={ICON_SIZE} /></Button>
    </Nav>
  )
}
