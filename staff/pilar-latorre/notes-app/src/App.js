//import logo from './logo.svg';
import './App.css';
import { SignUp, SignIn, Home } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'


function App() {
  const [view, setView ] = useState(sessionStorage.token? 'home' : 'sign-in')

  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        setView('sign-in')
      })
    } catch (error) {
      if (error) return alert(error.message)
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
      if (error) return alert(error.message)
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
      <h1>NOTES APP 📝 </h1>

      {view === 'sign-up' && <SignUp onSignUp={handleSignUp} onGoToSignIn = {handleGoToSignIn}/>}
      {view === 'sign-in' && <SignIn onSignIn={handleSignIn} onGoToSignUp = {handleGoToSignUp}/>}
      {view === 'home' && <Home />}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
