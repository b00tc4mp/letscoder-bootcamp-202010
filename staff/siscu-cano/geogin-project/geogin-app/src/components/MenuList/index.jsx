import React from 'react'
import { MenuListWrapper, MenuListItem } from './styles'

export const MenuList = () => {
  return (
    <MenuListWrapper>
      <MenuListItem>Participar en una búsqueda</MenuListItem>
      <MenuListItem>Crear una nueva búsqueda</MenuListItem>
      <MenuListItem>Listado de búsquedas</MenuListItem>
      <MenuListItem>Ranking</MenuListItem>
    </MenuListWrapper>
  )
}
