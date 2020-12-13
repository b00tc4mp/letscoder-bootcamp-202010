import React, { useState } from 'react'
import { useBodyClass } from '../../hooks/useBodyClass'
import { UploadImage } from '../../components/UploadImage'
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
import { saveQuest } from '../../logic'
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
  const [modePrivate, setModePrivate] = useState(false)
  const [kidsOk, setKidsOk] = useState(false)
  const [time, setTime] = useState()

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

  // All (search & test)
  const [test, setTest] = useState([])
  const [search, setSearch] = useState([])

  // Quest ID
  const [questIdAdded, setQuestIdAdded] = useState()

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
    setPoiBeginGame({
      type: 'Point',
      coordinates: [poi.lat, poi.lng]
    })
  }

  const handleClickMapEnd = poi => {
    setPoiEndGame({
      type: 'Point',
      coordinates: [poi.lat, poi.lng]
    })
  }

  const handleClickMapTest = poi => {
    setPoiTest({
      type: 'Point',
      coordinates: [poi.lat, poi.lng]
    })
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

  const addNewTest = () => {
    saveTest()
    resetTest()
    setStepTest(stepTest + 1)
  }

  const saveTest = () => {
    const _test = {
      title: titleTest,
      description: descriptionTest,
      qr: uuid.v4(),
      image: pictureTest,
      location: poiTest,
      trickOne: trickTest.data.trickOne,
      trickTwo: trickTest.data.trickTwo,
      trickThree: trickTest.data.trickThree
    }
    const updatedTest = [...test, _test]
    setTest(updatedTest)
    return updatedTest
  }

  const handleSaveQuest = (
    token,
    questId,
    title,
    coverImg,
    description,
    homeLocation,
    endLocation,
    time,
    modePrivate,
    kidsOk,
    evaluations,
    tests) => {
    window.alert('handleSaveQuest')

    saveQuest(
      token,
      questId,
      title,
      coverImg,
      description,
      homeLocation,
      endLocation,
      time,
      modePrivate,
      kidsOk,
      evaluations,
      tests,
      (error, questId) => {
        setQuestIdAdded(questId)
        if (error) return window.alert(error.message)
      })
  }

  const skip = ({ step, push }) => {
    const { token } = window.sessionStorage
    switch (step.id) {
      case 'coverStep': {
        picture && handleSaveQuest(token, questIdAdded, undefined, picture)
        push()
        break
      }
      case 'searchStep': {
        console.log(modePrivate)
        console.log(typeof modePrivate)
        nameSearch &&
        descriptionSearch &&
        poiBeginGame &&
        poiEndGame &&
        time &&
        handleSaveQuest(token, questIdAdded, nameSearch, undefined, descriptionSearch, poiBeginGame, poiEndGame, time, modePrivate, kidsOk)
        push()
        break
      }
      case 'quizStep': {
        if (titleTest && descriptionTest && poiTest && trickTest.data.trickOne) {
          const updatedTest = saveTest()
          handleSaveQuest(token, questIdAdded, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, updatedTest)
        }
        push()
        break
      }
    }
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
        onNext={skip}
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
                          <UploadImage onUploadImage={handleImage} previewImage={picture} />
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
                            onChange={handleNameSearch} placeholder='* Título'
                          />
                          <Input
                            value={descriptionSearch}
                            onChange={handleDescriptionSearch}
                            placeholder='* Descripción'
                          />
                          <Input
                            onClick={showModalBeginGame}
                            placeholder='* Ubicación de inicio del juego'
                            value={poiBeginGame && `${poiBeginGame.coordinates[0]} - ${poiBeginGame.coordinates[1]}`}
                            onChange={() => {}}
                          />
                          <Input
                            onClick={showModalEndGame}
                            placeholder='* Ubicación de final del juego'
                            value={poiEndGame && `${poiEndGame.coordinates[0]} - ${poiEndGame.coordinates[1]}`}
                            onChange={() => {}}
                          />
                          <TimeInput
                            initTime={time}
                            className='time-input'
                            placeholder='* Duración de la búsqueda (hh:mm)'
                            onTimeChange={handleTime}
                          />
                          <div className='switch-wrapper'>
                            <Switch
                              isOn={modePrivate}
                              onColor='#3780e9'
                              handleToggle={() => {
                                console.log('..................................')
                                console.log(!modePrivate)
                                console.log(typeof modePrivate)
                                console.log(typeof !modePrivate)
                                setModePrivate(!modePrivate)
                              }}
                            />{' '}
                            Búsqueda privada
                          </div>
                          <div className='switch-wrapper'>
                            <Switch
                              isOn={kidsOk}
                              onColor='#3780e9'
                              handleToggle={() => {
                                setKidsOk(!kidsOk)
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
                              {kidsOk && (
                                <p className='game-feature__tag'>
                                  Apta para niños
                                </p>
                              )}
                              {modePrivate && (
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
                            placeholder='* Título'
                          />
                          <Input
                            value={descriptionTest}
                            placeholder='* Descripción'
                            onChange={handleDescriptionTest}
                          />
                          <Input
                            onClick={showModalTestGame}
                            placeholder='* Ubicación de la prueba'
                            onChange={() => {}}
                            value={poiTest && `${poiTest.coordinates[0]} - ${poiTest.coordinates[1]}`}
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
                            placeholder='* Pista número 1...'
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
                            <button className='btn new' onClick={addNewTest}>
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

                          <button className='btn btn-next' onClick={next}>
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
