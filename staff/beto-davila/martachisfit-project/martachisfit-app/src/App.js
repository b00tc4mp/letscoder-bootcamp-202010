import './App.css';
import { Landing, SignIn, CaloriesGoal, UserInfo, SignUp, Home } from './components';
import { useState } from 'react';
import { macrosAfterCalories, caloriesCalc, registerUser, authenticateUser } from './logic/index';
import { Route, withRouter, Redirect } from 'react-router-dom'

  
export default withRouter(props => {
    
  const [goal, setGoal] = useState()
  
  const handleRegister = (fullname, email, password, calories) => {
    try {
      registerUser(fullname, email, password, calories, error => {
        if (error) return alert(error.message)
  
        props.history.push('/sign-in')
      })
    } catch (error) {
        alert(error.message)
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
        if (error) return alert(error.message)
  
        sessionStorage.token = token
        props.history.push('/')
      })    
    } catch (error) {
      alert(error.message)
    }
  }
  const { token } = sessionStorage
  
  return <div className="App">
  <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onRegister={handleRegister} />} />
  <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onLogin={handleAuthenticateUser} />} />
  <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/sign-in" />} />
  <Route path='/landing' render={() => <Landing />} />
  <Route path='/user-info' render={() => <UserInfo onGoToGoalCaloriesAndMacros={handleGetCaloriesAndMacros}/>} />
  <Route path= '/calories-goal' render={() => <CaloriesGoal macros={goal}/>} />

  </div>
})

