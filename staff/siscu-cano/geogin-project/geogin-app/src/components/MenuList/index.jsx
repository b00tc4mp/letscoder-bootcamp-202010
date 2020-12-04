import React from 'react'
import { MenuListWrapper, Link } from './styles'

export const MenuList = () => {
  return (
    <MenuListWrapper>
      <Link to='/search-access'>Participar en una búsqueda</Link>
      <Link to='/search-create'>Crear una nueva búsqueda</Link>
      <Link to='/search-list'>Listado de búsquedas</Link>
      <Link to='/ranking'>Ranking</Link>
    </MenuListWrapper>
  )
}
