import React, { useState } from 'react'
import { useBodyClass } from '../hooks/useBodyClass'
import { Switch } from '../components/Switch'

export const Profile = () => {
  const [value, setValue] = useState(false)

  useBodyClass('profile')
  return (
    <>
      <h1>Componente: Profile</h1>
      <Switch
        isOn={value}
        onColor='#EF476F'
        handleToggle={() => setValue(!value)}
      />
    </>
  )
}
