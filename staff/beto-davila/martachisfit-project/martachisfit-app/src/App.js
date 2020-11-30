import './App.css';
import { Landing, SignIn, CaloriesGoal, UserInfo } from './components';
import { useState } from 'react';
import { macrosAfterCalories, caloriesCalc } from './logic/index';

function App() {
  const [view, setView] = useState('user-info')
  // const [macros, setGoal] = useState(macros)

  const handleGoToSignIn = () => {
    setView('sign-in')
  }

  const handleGoToUserInfo = () => {
    setView('user-info')
  }

  const handleGetCaloriesAndMacros = (gender, goal, age, height, weight, activity) => {
    caloriesCalc(gender, goal, age, height, weight, activity, (error, totalCalories) => {
      if (error) return alert(error.message)

      macrosAfterCalories(totalCalories, (error, macros) => {
        if (error) return alert(error.message)

        // setGoal(macros)
    })

    } )
  }

  return <>
  {view === 'landing' && <Landing onUserInfo={handleGoToUserInfo} onGoToSignIn={handleGoToSignIn}/>}
  {view === 'sign-in' && <SignIn />}
  {view === 'user-info' && <UserInfo onGoToGoalCaloriesAndMacros={handleGetCaloriesAndMacros}/>}
  {/* {<CaloriesGoal />} */}
  </>
}

export default App;
