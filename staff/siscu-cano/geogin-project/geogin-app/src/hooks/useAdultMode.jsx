
import { useEffect, useState } from 'react'

export const useAdultMode = () => {
  const [theme, setTheme] = useState('adultTheme')
  const toggleTheme = () => {
    if (theme === 'adultTheme') {
      window.localStorage.setItem('theme', 'kidTheme')
      setTheme('kidTheme')
    } else {
      window.localStorage.setItem('theme', 'adultTheme')
      setTheme('adultTheme')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggleTheme]
}
