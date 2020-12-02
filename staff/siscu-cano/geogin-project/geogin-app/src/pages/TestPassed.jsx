import React from 'react'
import { useBodyClass } from '../hooks/useBodyClass'

export const TestPassed = () => {
  useBodyClass('testpassed')
  return (
    <>
      <h1>Componente: TestPassed</h1>
    </>
  )
}
