import React from 'react'
import { Router } from '@reach/router'
import { PrivateRoute } from './PrivateRouter'

// Pages
import { SplashScreen } from '../pages/SplashScreen'
import { Onboarding } from '../pages/Onboarding'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { NotFound } from '../pages/NotFound'

export const PublicRoute = () => (
  <>
    <Router>
      <SplashScreen path='/' />
      <Onboarding path='/onboarding' />
      <Login path='/login' />
      <Register path='/register' />
      <NotFound default />
    </Router>
    <PrivateRoute />
  </>
)
