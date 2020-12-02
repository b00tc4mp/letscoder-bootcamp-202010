import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyle'
import { adultTheme, kidTheme } from './theme'
import { ProgressBar } from './components/ProgressBar'
import { ToggleTheme } from './components/ToggleTheme'
import { useAdultMode } from './hooks/useAdultMode'
import { NavBar } from './components/NavBar'
// Pages
import { Menu } from './pages/Menu'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { FavoritesList } from './pages/FavoritesList'
import { Onboarding } from './pages/Onboarding'
import { SplashScreen } from './pages/SplashScreen'
import { SearchAccess } from './pages/SearchAccess'
import { SearchAccessNotLogged } from './pages/SearchAccessNotLogged'
import { SearchCreate } from './pages/SearchCreate'
import { SearchCreateFinish } from './pages/SearchCreateFinish'
import { SearchCreateTest } from './pages/SearchCreateTest'
import { SearchDescription } from './pages/SearchDescription'
import { SearchFinish } from './pages/SearchFinish'
import { SearchFinishReview } from './pages/SearchFinishReview'
import { SearchHelp } from './pages/SearchHelp'
import { SearchList } from './pages/SearchList'
import { SearchLocation } from './pages/SearchLocation'
import { SearchOpinions } from './pages/SearchOpinions'
import { SearchStart } from './pages/SearchStart'
import { TestPassed } from './pages/TestPassed'
import { Profile } from './pages/Profile'
import { Ranking } from './pages/Ranking'

export const App = () => {
  const [theme, toggleTheme, componentMounted] = useAdultMode()
  const themeMode = theme === 'adultTheme' ? adultTheme : kidTheme
  if (!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Router>
        <Menu path='/' />
        <Login path='/login' />
        <Register path='/register' />
        <FavoritesList path='/favorites' />
        <Onboarding path='/onboarding' />
        <SplashScreen path='/splashscreen' />
        <SearchAccess path='/search-access' />
        <SearchAccessNotLogged path='/search-access-not-logged' />
        <SearchCreate path='/search-create' />
        <SearchCreateFinish path='/search-create-finish' />
        <SearchCreateTest path='/search-create-test' />
        <SearchDescription path='/search-description' />
        <SearchFinish path='/search-finish' />
        <SearchFinishReview path='/search-finish-review' />
        <SearchHelp path='/search-help' />
        <SearchList path='/search-list' />
        <SearchLocation path='/search-location' />
        <SearchOpinions path='/search-opinions' />
        <SearchStart path='/search-start' />
        <TestPassed path='/test-passed' />
        <Profile path='/profile' />
        <Ranking path='/ranking' />
      </Router>
      <ProgressBar done={50} />
      <NavBar />
    </ThemeProvider>
  )
}