
import { useEffect, useState } from 'react'

export const useAdultMode = () => {
  const [theme, setTheme] = useState('adultTheme')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'adultTheme') {
      setMode('kidTheme')
    } else {
      setMode('adultTheme')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode('adultTheme')
    }
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}
