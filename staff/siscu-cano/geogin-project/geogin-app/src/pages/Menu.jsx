import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { MenuList } from '../components/MenuList'

export const Menu = () => {
  useBodyClass('menu')
  return (
    <>
      <MenuList />
    </>
  )
}
