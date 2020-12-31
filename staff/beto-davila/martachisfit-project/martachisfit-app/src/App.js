import './App.css';
import { Landing, SignIn, CaloriesGoal, UserInfo, SignUp, Home } from './components';
import { useState } from 'react';
import { macrosAfterCalories, caloriesCalc, registerUser, authenticateUser } from './logic/index';
import { Route, withRouter, Redirect } from 'react-router-dom'


export default withRouter(props => {

  const [goal, setGoal] = useState()
  const [error, setError] = useState(null)

  function feedbackError(error) {
    setError(error)
    setTimeout(() => {
      setError(null)
    }, 3000)
  }


  const handleRegister = (fullname, email, password, calories) => {
    try {
      registerUser(fullname, email, password, calories, error => {
        if (error) return feedbackError(error.message)

        props.history.push('/sign-in')
      })
    } catch (error) {
      feedbackError("Error de validación")
    }
  }


  const handleGetCaloriesAndMacros = (gender, goal, age, height, weight, activity) => {
    try {
      caloriesCalc(gender, goal, age, height, weight, activity, totalCalories => {

        macrosAfterCalories(totalCalories, goal => {

          setGoal(goal)
          props.history.push('/calories-goal')
        })
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleAuthenticateUser = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return feedbackError(error.message)

        sessionStorage.token = token
        props.history.push('/')
      })
    } catch (error) {
      feedbackError("error de validación")
    }
  }
  const { token } = sessionStorage

  return <div className="App">
    <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp error={error} onRegister={handleRegister} />} />
    <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn error={error} onLogin={handleAuthenticateUser} />} />
    <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/landing" />} />
    <Route path='/landing' render={() => <Landing />} />
    <Route path='/user-info' render={() => <UserInfo onGoToGoalCaloriesAndMacros={handleGetCaloriesAndMacros} />} />
    <Route path='/calories-goal' render={() => <CaloriesGoal macros={goal} />} />

  </div>
})

