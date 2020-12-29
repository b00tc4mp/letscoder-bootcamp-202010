import React from 'react'
import { MenuListWrapper, Link } from './styles'
import { AiOutlineTeam, AiOutlineQrcode } from 'react-icons/ai'
import { Logo } from '../../components/Logo'
const ICON_SIZE = '22px'

export const MenuList = () => {
  return (
    <MenuListWrapper>
      <Logo />
      <Link to='/search-access'><AiOutlineTeam className='menu-icon' size={ICON_SIZE} />Participar en una búsqueda</Link>
      <Link to='/search-create'><AiOutlineQrcode className='menu-icon' size={ICON_SIZE} />Crear una nueva búsqueda</Link>
      {/* <Link to='/search-list'>Listado de búsquedas</Link>
      <Link to='/ranking'>Ranking</Link> */}
    </MenuListWrapper>
  )
}
