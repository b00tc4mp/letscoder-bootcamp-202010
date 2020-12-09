import React, { useState } from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { UploadImage } from '../components/UploadImage'
import { useInputValue } from '../hooks/useInputValue'
import { Switch } from '../components/Switch'
import { Wizard, Steps, Step } from 'react-albus'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Input, DefaultLayout } from './searchCreateStyles'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import { Line } from 'rc-progress'
import { Modal } from '../components/Modal'
import { MapGetPos } from '../components/MapGetPos'

const ICON_SIZE = '22px'

export const SearchCreate = () => {
  const nameSearch = useInputValue('')
  const [privateSearch, setPrivateSearch] = useState(false)
  const [suitableChilds, setSuitableChilds] = useState(false)
  const [poiBeginGame, setPoiBeginGame] = useState()
  const [poiEndGame, setPoiEndGame] = useState()
  const [showModalBegin, setShowModalBegin] = useState(false)
  const [showModalEnd, setShowModalEnd] = useState(false)
  const [time, setTime] = useState('00:00')

  useBodyClass('searchcreate')

  const showModalBeginGame = () => {
    setShowModalBegin(true)
  }

  const showModalEndGame = () => {
    setShowModalEnd(true)
  }

  const hideModalBeginGame = () => {
    setShowModalBegin(false)
  }

  const hideModalEndGame = () => {
    setShowModalEnd(false)
  }

  const handleClickMapBegin = (poi) => {
    setPoiBeginGame(poi)
  }

  const handleClickMapEnd = (poi) => {
    setPoiEndGame(poi)
  }

  const handleTime = (event, time) => {
    console.log(typeof time)
    setTime(time)
  }

  return (
    <DefaultLayout>
      <h1>Crear nueva búsqueda</h1>
      <Modal show={showModalBegin} handleClose={hideModalBeginGame}>
        <MapGetPos onAddMarker={handleClickMapBegin} />
      </Modal>
      <Modal show={showModalEnd} handleClose={hideModalEndGame}>
        <MapGetPos onAddMarker={handleClickMapEnd} />
      </Modal>
      <Wizard render={({ step, steps }) => (
        <div>
          <Line
            percent={(steps.indexOf(step) + 1) / steps.length * 100}
            className='pad-b'
          />
          <TransitionGroup>
            <CSSTransition
              key={step.id}
              classNames='wizard'
              timeout={{ enter: 500, exit: 500 }}
            >
              <div className='wizard-steps'>
                <Steps key={step.id} step={step}>
                  <Step
                    id='coverStep'
                    render={({ next }) => (
                      <div>
                        <p className='description'>Inserta la imagen que deseas que aparezca como portada de la búsqueda, tambien aparecerá en los listados.</p>
                        <UploadImage />
                        <button className='btn btn-next' onClick={next}>Siguiente <BiChevronsRight size={ICON_SIZE} /></button>
                      </div>
                    )}
                  />
                  <Step
                    id='searchStep'
                    render={({ next, previous }) => (
                      <div>
                        <p className='description'>Rellena los siguientes campos sobre la BÚSQUEDA:</p>
                        <Input {...nameSearch} placeholder='Nombre de la búqueda' />
                        <Input onClick={showModalBeginGame} placeholder='Ubicación de inicio' value={poiBeginGame} />
                        <Input onClick={showModalEndGame} placeholder='Ubicación de fin' value={poiEndGame} />
                        <Input placeholder='Duración' />
                        <p className='switch-wrapper'>
                          <Switch
                            isOn={privateSearch}
                            onColor='#3780e9'
                            handleToggle={() => {
                              console.log('private')
                              setPrivateSearch(!privateSearch)
                            }}
                          /> Búsqueda privada
                        </p>
                        <p className='switch-wrapper'>
                          <Switch
                            isOn={suitableChilds}
                            onColor='#3780e9'
                            handleToggle={() => {
                              console.log('suitable')
                              setSuitableChilds(!suitableChilds)
                            }}
                          /> Apto para niños
                        </p>
                        <button className='btn btn-next' onClick={next}>Siguiente <BiChevronsRight size={ICON_SIZE} /></button>
                        <button className='btn btn-previous' onClick={previous}><BiChevronsLeft size={ICON_SIZE} />Anterior</button>
                      </div>
                    )}
                  />
                  <Step
                    id='quizStep'
                    render={({ previous }) => (
                      <div>
                        <h1>Dumbledore</h1>
                        <button className='btn btn-previous' onClick={previous}>Anterior <BiChevronsLeft size={ICON_SIZE} /></button>
                      </div>
                    )}
                  />
                </Steps>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
      />
    </DefaultLayout>
  )
}
