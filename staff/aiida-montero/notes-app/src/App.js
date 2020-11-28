
import './App.css';
import { SignUp, SignIn, Home } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'

function App() {
  const [view, setView] = useState(sessionStorage.token? 'home' : 'sign-up')

  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
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

  return (
    <div className="App">
      <header className="App-header">
      

        {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />}
        {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />}
        {view === 'home' && <Home />}

       
    

      </header>
    </div>
  );
}

export default App;
