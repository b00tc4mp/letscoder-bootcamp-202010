import React, { useState } from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { UploadImage } from '../components/UploadImage'
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
  const [privateSearch, setPrivateSearch] = useState(false)
  const [suitableChilds, setSuitableChilds] = useState(false)
  const [show, setShow] = useState(false)

  useBodyClass('searchcreate')

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  return (
    <DefaultLayout>
      <h1>Crear nueva búsqueda</h1>
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
                        <Modal show={show} handleClose={hideModal}>
                          <MapGetPos />
                        </Modal>
                        <span onClick={showModal}>
                          open
                        </span>
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
                        <Input placeholder='Nombre de la búqueda' />
                        <Input placeholder='Ubicación de inicio' />
                        <Input placeholder='Ubicación de fin' />
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
                        <button className='btn btn-previous' onClick={previous}>Anterior <BiChevronsLeft size={ICON_SIZE} /></button>
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
