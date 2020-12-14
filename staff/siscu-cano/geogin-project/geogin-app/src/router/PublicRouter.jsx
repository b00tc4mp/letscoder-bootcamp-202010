import React from 'react'
import { Router } from '@reach/router'
import Context from '../Context'

// Pages
import { SplashScreen } from '../pages/SplashScreen'
import { Onboarding } from '../pages/Onboarding'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { NotFound } from '../pages/NotFound'
import { Menu } from '../pages/Menu'
import { FavoritesList } from '../pages/FavoritesList'
import { SearchAccess } from '../pages/SearchAccess'
import { SearchAccessNotLogged } from '../pages/SearchAccessNotLogged'
import { SearchCreate } from '../pages/SearchCreate'
import { SearchCreateFinish } from '../pages/SearchCreateFinish'
import { SearchCreateTest } from '../pages/SearchCreateTest'
import { SearchDescription } from '../pages/SearchDescription'
import { SearchFinish } from '../pages/SearchFinish'
import { SearchFinishReview } from '../pages/SearchFinishReview'
import { SearchHelp } from '../pages/SearchHelp'
import { SearchList } from '../pages/SearchList'
import { SearchLocation } from '../pages/SearchLocation'
import { SearchOpinions } from '../pages/SearchOpinions'
import { SearchStart } from '../pages/SearchStart'
import { TestPassed } from '../pages/TestPassed'
import { Profile } from '../pages/Profile'
import { Ranking } from '../pages/Ranking'
import { SearchCreateMenu } from '../pages/SearchCreateMenu'

export const PublicRoute = () => (
  <Context.Consumer>
    {
      ({ isAuth }) =>
        isAuth
          ? <Router>
            <Menu path='/menu' />
            <FavoritesList path='/favorites' />
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
            <SearchCreateMenu path='/search-create-menu/:questId' />
            <NotFound default />
          </Router>
          : <Router>

            <SplashScreen path='/' />
            <Onboarding path='/onboarding' />
            <Login path='/login' />
            <Register path='/register' />
            <Login path='/menu' />
            <Login path='/favorites' />
            <Login path='/search-access' />
            <Login path='/search-access-not-logged' />
            <Login path='/search-create' />
            <Login path='/search-create-menu/:questId' />
            <Login path='/search-create-finish' />
            <Login path='/search-create-test' />
            <Login path='/search-description' />
            <Login path='/search-finish' />
            <Login path='/search-finish-review' />
            <Login path='/search-help' />
            <Login path='/search-list' />
            <Login path='/search-location' />
            <Login path='/search-opinions' />
            <Login path='/search-start' />
            <Login path='/test-passed' />
            <Login path='/profile' />
            <Login path='/ranking' />
            <NotFound default />
          </Router>
   }
  </Context.Consumer>

)
