import './App.css';
import { Landing, SignIn, CaloriesGoal, UserInfo, SignUp, Home } from './components';
import { useState } from 'react';
import { macrosAfterCalories, caloriesCalc, registerUser, authenticateUser } from './logic/index';

function App() {
  const [view, setView] = useState(sessionStorage.token? 'home' : 'landing')
  const [goal, setGoal] = useState()

  const handleGoToSignIn = () => {
    setView('sign-in')
  }

  const handleGoToUserInfo = () => {
    setView('user-info')
  }

  const handleGoToRegister = () => {
    setView('sign-up')
  }

  const handleGoToPlans = () => {
    setView('plans')
  }

  const handleRegister = (fullname, email, password, calories) => {
    try {
      registerUser(fullname, email, password, calories, error => {
        if (error) return alert(error.message)
  
        setView('sign-in')
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
          setView('calories-goal')
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
        setView('home')
      })    
    } catch (error) {
      alert(error.message)
    }
  }
  
  return <>
  {view === 'landing' && <Landing onUserInfo={handleGoToUserInfo} onGoToSignIn={handleGoToSignIn}/>}
  {view === 'sign-in' && <SignIn onLogin={handleAuthenticateUser}/>}
  {view === 'user-info' && <UserInfo onGoToGoalCaloriesAndMacros={handleGetCaloriesAndMacros}/>}
  {view === 'calories-goal' && goal && <CaloriesGoal macros={goal} onGoToRegister={handleGoToRegister} onGoToPlans={handleGoToPlans}/>}
  {view === 'sign-up' && <SignUp onRegister={handleRegister}/>}
  {view === 'home' && <Home />}
  </>
}

export default App;
