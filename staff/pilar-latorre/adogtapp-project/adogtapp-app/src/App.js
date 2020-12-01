import { SignUp, SignIn } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'

function App() {
  const [view, setView] = useState(sessionStorage.token? 'sign-in' : 'sign-up')

  const handleSignUp = (userName, email, password, address, city, phone) => {
    try {
      registerUser(userName, email, password, address, city, phone, error => {
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

        setView('sign-up')
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

  return (
    <div className="App">
      <header className="App-header">
      
        {view === 'sign-up' && <SignUp onSignUp={handleSignUp} onGoToSignIn = {handleGoToSignIn}/>}
        {view === 'sign-in' && <SignIn onSignIn={handleSignIn} onGoToSignUp = {handleGoToSignUp}/>}
        {/* {view === 'home' && <Home />} */}


      </header>
    </div>
  );
}

export default App;
