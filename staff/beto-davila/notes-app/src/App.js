import logo from './logo.svg';
import './App.css';
import { Register, Login, Home } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'

function App() {
  // React Hooks
  const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

  const handleRegister = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, (error) => {
        if (error) return alert(error.message)
  
        setView('login')
      })
      
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoToLogin = () => {
    setView('login')
  }

  const handleLogin = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert (error.message)
  
        sessionStorage.token = token
        //console.log(`Correct authentication. Your id is: ${id}`)
        setView('home')
      })      
    } catch (error) {
      return alert(error.message)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>

        {view === 'register' && <Register onRegister={handleRegister} onGoToLogin={handleGoToLogin} />}

        {view === 'login' && <Login onLogin={handleLogin}/>}

        {view === 'home' && <Home />}

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
