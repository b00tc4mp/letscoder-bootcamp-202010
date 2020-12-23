import React, { useState, useEffect } from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { MapViewPos } from '../../components/MapViewPos'
import { ButtonToggle } from '../../components/ButtonToggle'
import { SearchInitGameWrapper } from './styles'
import { QrScanner } from '../../components/QrScanner'
import { retrieveGame } from '../../logic'
import { toast } from 'react-toastify'
import { FcHighPriority } from 'react-icons/fc'

const ICON_SIZE = '22px'

export const SearchInitGame = ({ gameId }) => {
  const [view, setView] = useState()
  const [game, setGame] = useState()
  const [tests, setTests] = useState()

  useBodyClass('search-init-game')

  const setGameState = () => {
    try {
      retrieveGame(gameId, (error, game) => {
        if (error) return toast.error(<span><FcHighPriority size={ICON_SIZE} />{error.message}</span>)
        setGame({ game })
        const { quest: { tests } = {} } = game
        setTests(tests)
      })
    } catch (error) {
      toast.error(<span><FcHighPriority size={ICON_SIZE} />{error.message}</span>)
    }
  }

  const handleToggleView = (toggle) => {
    setView(toggle)
  }

  useEffect(() => {
    console.log(gameId)
    setGameState()
  }, [])

  return (
    <SearchInitGameWrapper>
      <ButtonToggle onToggleView={handleToggleView} />
      {!view && tests && <MapViewPos gameTests={tests} />}
      {view && <QrScanner game={game} />}
    </SearchInitGameWrapper>
  )
}
