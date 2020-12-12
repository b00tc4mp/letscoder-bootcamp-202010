import React, { useState } from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { UploadImage } from '../../components/UploadImage'
import { useInputValue } from '../../hooks/useInputValue'
import { Switch } from '../../components/Switch'
import { Wizard, Steps, Step } from 'react-albus'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Input, DefaultLayout } from './styles'
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi'
import { Line } from 'rc-progress'
import { Modal } from '../../components/Modal'
import { Stepper } from '../../components/Stepper'
import { MapGetPos } from '../../components/MapGetPos'
import { TextArea } from '../../components/TextArea'
import { RiAddCircleLine } from 'react-icons/ri'
import { IoIosSave } from 'react-icons/io'
import { toast } from 'react-toastify'
import uuid from 'uuid'

import TimeInput from 'react-time-input'
import NoImage from '../../assets/images/no-image.png'

const ICON_SIZE = '22px'

export const SearchCreate = () => {
  // Modals
  const [showModalBegin, setShowModalBegin] = useState(false)
  const [showModalEnd, setShowModalEnd] = useState(false)
  const [showModalTest, setshowModalTest] = useState(false)

  // Search
  const [picture, setPicture] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [descriptionSearch, setDescriptionSearch] = useState('')
  const [poiBeginGame, setPoiBeginGame] = useState('')
  const [poiEndGame, setPoiEndGame] = useState('')
  const [privateSearch, setPrivateSearch] = useState(false)
  const [suitableChilds, setSuitableChilds] = useState(false)
  const [time, setTime] = useState('00:00')

  // Test
  const [titleTest, setTitleTest] = useState('')
  const [descriptionTest, setDescriptionTest] = useState('')
  const [pictureTest, setPictureTest] = useState('')
  const [poiTest, setPoiTest] = useState('')
  const [stepTest, setStepTest] = useState(0)
  const [trickTest, setTrickTest] = useState({
    data: {
      trickOne: '',
      trickTwo: '',
      trickThree: ''
    }
  })

  let userId

  // All (search & test)
  const [test, setTest] = useState([])
  const [search, setSearch] = useState([])

  useBodyClass('searchcreate')

  const showModalBeginGame = () => {
    setShowModalBegin(true)
  }

  const hideModalBeginGame = () => {
    setShowModalBegin(false)
  }

  const showModalEndGame = () => {
    setShowModalEnd(true)
  }

  const hideModalEndGame = () => {
    setShowModalEnd(false)
  }

  const showModalTestGame = () => {
    setshowModalTest(true)
  }

  const hideModalTestGame = () => {
    setshowModalTest(false)
  }
  const handleClickMapBegin = poi => {
    setPoiBeginGame(poi)
  }

  const handleClickMapEnd = poi => {
    setPoiEndGame(poi)
  }

  const handleClickMapTest = poi => {
    setPoiTest(poi)
  }

  const handleTime = time => {
    setTime(time)
  }

  const handleImage = image => {
    setPicture(image)
  }

  const handleImageTest = image => {
    setPictureTest(image)
  }

  const handleDescriptionTest = e => {
    setDescriptionTest(e.currentTarget.value)
  }

  const handleTitleTest = e => {
    setTitleTest(e.currentTarget.value)
  }

  const handleNameSearch = e => {
    setNameSearch(e.currentTarget.value)
  }

  const handleDescriptionSearch = e => {
    setDescriptionSearch(e.currentTarget.value)
  }

  const resetTest = () => {
    setTitleTest('')
    setDescriptionTest('')
    setPictureTest('')
    setPoiTest('')
    setTrickTest({
      data: {
        trickOne: '',
        trickTwo: '',
        trickThree: ''
      }
    })
  }

  const handleTextareaChange = e => {
    const { data } = trickTest
    data[e.target.name] = e.target.value
    setTrickTest({ data })
  }

  const saveTest = () => {
    console.log(picture)
    const { lat, lng } = poiTest

    const _test = {
      title: titleTest,
      description: descriptionTest,
      qr: uuid.v4(),
      image: pictureTest,
      location: [lat, lng],
      trickOne: trickTest.data.trickOne,
      trickTwo: trickTest.data.trickTwo,
      trickThree: trickTest.data.trickThree
    }
    console.log(_test)
    setTest([...test, _test])
    resetTest()
    setStepTest(stepTest + 1)
    console.log(test)
  }

  const saveAll = () => {
    const token = window.sessionStorage.token
    let userId

    try {
      const { sub } = JSON.parse(window.atob(token.split('.')[1]))
      userId = sub
    } catch (e) {
      return null
    }

    if (
      titleTest.trim() === '' ||
      descriptionTest.trim() === '' ||
      poiTest === '' ||
      trickTest.data.trickOne === ''
    ) {
      if (stepTest === 0) {
        toast.error('⛔️ Es necesario introducir como mínimo una prueba!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false
        })
      } else {
        toast.error(
          '⛔️ Para finalizar termina de rellenar los campos obligatorios!',
          {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          }
        )
      }
    }

    if (
      !(
        titleTest.trim() === '' ||
        descriptionTest.trim() === '' ||
        poiTest === '' ||
        trickTest.data.trickOne === ''
      )
    ) {
      saveTest()
    }
    console.log(poiBeginGame)
    console.log(test)
    const { lat: latBegin, lng: lngBegin } = poiBeginGame
    const { lat: latEnd, lng: lngEnd } = poiEndGame

    const _search = {
      title: nameSearch,
      coverImg: picture,
      description: descriptionSearch,
      homeLocation: [latBegin, lngBegin],
      endLocation: [latEnd, lngEnd],
      time: time,
      private: privateSearch,
      KidsOk: suitableChilds,
      test: test,
      owner: userId
    }

    setSearch(_search)
    console.log(_search)
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
      <Modal show={showModalTest} handleClose={hideModalTestGame}>
        <MapGetPos onAddMarker={handleClickMapTest} />
      </Modal>
      <Wizard
        render={({ step, steps }) => (
          <div>
            <Line
              percent={((steps.indexOf(step) + 1) / steps.length) * 100}
              className='pad-b'
            />
            <TransitionGroup>
              <CSSTransition
                key={step.id}
                classNames='wizard'
                timeout={{ enter: 500, exit: 500 }}
              >
                <div className='wizard-steps'>
                  <Steps key={step.id} step={step.id ? step : undefined}>
                    <Step
                      id='coverStep'
                      render={({ next }) => (
                        <div>
                          <p className='description'>
                            Inserta la imagen que deseas que aparezca como
                            portada de la búsqueda, tambien aparecerá en los
                            listados.
                          </p>
                          <UploadImage onUploadImage={handleImage} />
                          <button className='btn btn-next' onClick={next}>
                            Siguiente <BiChevronsRight size={ICON_SIZE} />
                          </button>
                        </div>
                      )}
                    />
                    <Step
                      id='searchStep'
                      render={({ next, previous }) => (
                        <div>
                          <p className='description'>
                            Rellena los siguientes campos sobre la BÚSQUEDA:
                          </p>
                          <Input
                            value={nameSearch}
                            onChange={handleNameSearch} placeholder='Título'
                          />
                          <Input
                            value={descriptionSearch}
                            onChange={handleDescriptionSearch}
                            placeholder='Descripción'
                          />
                          <Input
                            onClick={showModalBeginGame}
                            placeholder='Ubicación de inicio'
                            value={poiBeginGame}
                            onChange={() => {}}
                          />
                          <Input
                            onClick={showModalEndGame}
                            placeholder='Ubicación de fin'
                            value={poiEndGame}
                            onChange={() => {}}
                          />
                          <TimeInput
                            initTime={time}
                            className='time-input'
                            onTimeChange={handleTime}
                          />
                          <div className='switch-wrapper'>
                            <Switch
                              isOn={privateSearch}
                              onColor='#3780e9'
                              handleToggle={() => {
                                setPrivateSearch(!privateSearch)
                              }}
                            />{' '}
                            Búsqueda privada
                          </div>
                          <div className='switch-wrapper'>
                            <Switch
                              isOn={suitableChilds}
                              onColor='#3780e9'
                              handleToggle={() => {
                                setSuitableChilds(!suitableChilds)
                              }}
                            />{' '}
                            Apto para niños
                          </div>
                          <hr />
                          <p className='description'>
                            Previsualización de tú búsqueda:
                          </p>
                          <div className='game-feature'>
                            {time && (
                              <div className='game-feature__time'>
                                <div>{time}</div>
                              </div>
                            )}
                            <img src={picture || NoImage} />
                            <div>
                              {nameSearch && (
                                <p className='game-feature__title'>
                                  {nameSearch}
                                </p>
                              )}
                              {descriptionSearch && (
                                <p className='game-feature__description'>
                                  {descriptionSearch}
                                </p>
                              )}
                              {suitableChilds && (
                                <p className='game-feature__tag'>
                                  Apta para niños
                                </p>
                              )}
                              {privateSearch && (
                                <p className='game-feature__tag'>
                                  Búsqueda privada
                                </p>
                              )}
                            </div>
                          </div>
                          <button className='btn btn-next' onClick={next}>
                            Siguiente <BiChevronsRight size={ICON_SIZE} />
                          </button>
                          <button
                            className='btn btn-previous'
                            onClick={previous}
                          >
                            <BiChevronsLeft size={ICON_SIZE} />
                            Anterior
                          </button>
                        </div>
                      )}
                    />
                    <Step
                      id='quizStep'
                      render={({ next, previous }) => (
                        <div>
                          <Stepper onStepChange={stepTest} steps={10} />
                          <p className='description'>
                            Rellena las PRUEBAS a realizar (1 mínimo - 10
                            máximo):
                          </p>
                          <Input
                            value={titleTest}
                            onChange={handleTitleTest}
                            placeholder='Título'
                          />
                          <Input
                            value={descriptionTest}
                            placeholder='Descripción'
                            onChange={handleDescriptionTest}
                          />
                          <Input
                            onClick={showModalTestGame}
                            placeholder='Ubicación de la prueba'
                            onChange={() => {}}
                            value={poiTest}
                          />
                          <UploadImage
                            className='small-upload'
                            onUploadImage={handleImageTest}
                            preview={false}
                            withLabel={false}
                          />
                          <TextArea
                            labelText=''
                            value={trickTest.data.trickOne}
                            placeholder='Pista número 1...'
                            name='trickOne'
                            onChange={handleTextareaChange}
                          />
                          <TextArea
                            labelText=''
                            value={trickTest.data.trickTwo}
                            placeholder='Pista número 2...'
                            name='trickTwo'
                            onChange={handleTextareaChange}
                          />
                          <TextArea
                            labelText=''
                            value={trickTest.data.trickThree}
                            placeholder='Pista número 3...'
                            name='trickThree'
                            onChange={handleTextareaChange}
                          />
                          {!(
                            titleTest.trim() === '' ||
                            descriptionTest.trim() === '' ||
                            poiTest === '' ||
                            trickTest.data.trickOne === ''
                          ) && (
                            <button className='btn new' onClick={saveTest}>
                              <RiAddCircleLine size={ICON_SIZE} />
                              Añadir prueba
                            </button>
                          )}
                          <button
                            className='btn btn-previous'
                            onClick={previous}
                          >
                            <BiChevronsLeft size={ICON_SIZE} />
                            Anterior
                          </button>

                          <button className='btn btn-next' onClick={saveAll}>
                            <IoIosSave size={ICON_SIZE} /> Guardar y salir
                          </button>
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
