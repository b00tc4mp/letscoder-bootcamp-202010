import './App.css';
import { Landing, SignIn, CaloriesGoal, UserInfo, SignUp } from './components';
import { useState } from 'react';
import { macrosAfterCalories, caloriesCalc, registerUser } from './logic/index';

function App() {
  const [view, setView] = useState('landing')
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

  const handleRegister = (fullname, email, password) => {
    registerUser(fullname, email, password, error => {
      if (error) return alert(error.message)

      setView('home')
    })
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

  return <>
  {view === 'landing' && <Landing onUserInfo={handleGoToUserInfo} onGoToSignIn={handleGoToSignIn}/>}
  {view === 'sign-in' && <SignIn />}
  {view === 'user-info' && <UserInfo onGoToGoalCaloriesAndMacros={handleGetCaloriesAndMacros}/>}
  {view === 'calories-goal' && goal && <CaloriesGoal macros={goal} onGoToRegister={handleGoToRegister} onGoToPlans={handleGoToPlans}/>}
  {view === 'sign-up' && <SignUp onRegister={handleRegister}/>}
  </>
}

export default App;
