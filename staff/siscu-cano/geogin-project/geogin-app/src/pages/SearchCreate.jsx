import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { UploadImage } from '../components/UploadImage'
import StepProgressBar from 'react-step-progress'
import 'react-step-progress/dist/index.css'
import { DefaultLayout } from './searchCreateStyles'

export const SearchCreate = () => {
  useBodyClass('searchcreate')

  // setup the step content
  const step1Content = (
    <>
      <p className='description'>1.) Inserta la imagen que deseas que aparezca como portada de la búqueda.</p>
      <UploadImage />
    </>
  )

  const step2Content = <h1>Step 2 Content</h1>
  const step3Content = <h1>Step 3 Content</h1>

  // setup step validators, will be called before proceeding to the next step
  function step2Validator () {
  // return a boolean
  }

  function step3Validator () {
  // return a boolean
  }

  function onFormSubmit () {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <DefaultLayout>
      <h1>Crear nueva búsqueda</h1>
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        completeColor='#4db193'
        defaultColor='#4db193'
        activeColor='#4db193'
        circleFontColor='#4db193'
        steps={[
          {
            label: 'Búsqueda',
            subtitle: '',
            name: 'step 1',
            content: step1Content
          },
          {
            label: 'Pruebas',
            subtitle: '',
            name: 'step 2',
            content: step2Content,
            validator: step2Validator
          },
          {
            label: 'Participantes',
            subtitle: '',
            name: 'step 3',
            content: step3Content,
            validator: step3Validator
          }
        ]}
      />
    </DefaultLayout>
  )
}
