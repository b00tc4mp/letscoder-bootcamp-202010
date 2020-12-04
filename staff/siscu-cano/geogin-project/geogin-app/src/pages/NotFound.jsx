import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { NotFoundAnime } from '../components/NotFoundAnime'

export const NotFound = () => {
  useBodyClass('notfound')
  return (
    <NotFoundAnime />
  )
}
