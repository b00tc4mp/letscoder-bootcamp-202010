import { SignUp, SignIn, Home, Main } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'

function App() {
  const [view, setView] = useState(sessionStorage.token? 'home' : 'sign-in')

  const handleSignUp = (userName, email, password, address, city, phone, description) => {
    try {
      registerUser(userName, email, password, address, city, phone, description, error => {
        if (error) return alert(error.message)

        setView('sign-in')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSignIn = (email, password) => {
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

  const handleGoToSignIn = () => {

    setView('sign-in')
  }

  const handleGoToSignUp = () => {

    setView('sign-up')
  }

  const handleGoToMain = () => {

    setView('main')
  }



  return (
    <div className="App">
      <header className="App-header">
      
        {view === 'sign-up' && <SignUp onSignUp={handleSignUp} onGoToSignIn = {handleGoToSignIn}/>}
        {view === 'sign-in' && <SignIn onSignIn={handleSignIn} onGoToSignUp = {handleGoToSignUp} onGoToMain = {handleGoToMain}/>}
        {view === 'home' && <Home />}
        {view === 'main' && <Main />}


      </header>
    </div>
  );
}

export default App;
