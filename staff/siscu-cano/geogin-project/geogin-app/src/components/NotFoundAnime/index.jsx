import React from 'react'
import { NotFoundWrapper } from './styles'

export const NotFoundAnime = () => {
  return (
    <NotFoundWrapper>
      <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css' />

      <div className='space'>
        <div className='text'>
          <div className='align-middle'>
            <h1>404</h1>
            <p>Ups! Parece que alguien esta perdido...</p>
          </div>
        </div>
        <div className='orbit-1' />
        <div className='moon-1 sm' />
        <div className='orbit-2' />
        <div className='moon-2 sm' />
        <div className='orbit-3' />
        <div className='moon-3' />
      </div>
    </NotFoundWrapper>
  )
}
