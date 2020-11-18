import logo from './logo.svg';
import './App.css';
import { SignUp, SignIn } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'


function App() {
  const [view, setView ] = useState('sign-up')

    const handleSignUp = (fullname, email, password) => {
      registerUser(fullname, email, password, error => {
        if(error) return alert(error.message)

        setView('sign-in')

      })
    }

    const handleSignIn = ( email, password) => {
      authenticateUser(email, password, (error, token) => {
        if(error) return alert(error.message)

        sessionStorage.token = token

        setView('home')

      })
    }


  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello Pilar! </h1>

      {view === 'sign-up' && <SignUp onSignUp={handleSignUp}/>}
      {view === 'sign-in' && <SignIn onSignIn={handleSignIn}/>}

        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
