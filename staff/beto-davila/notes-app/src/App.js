import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import { useState } from 'react'
import 

function App() {
  const [view, setView] = useState('register')

  const handleRegister = (fullname, email, password) => {
    registerUser(fullname, email, password, (error) => {
      if (error) return console.error(error)
    })

    setView('login')
  }
  const handleLogin = (email, password) => {
    console.log('Signing in....')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Beto!</h1>

        {view === 'register' && <Register onRegister={handleRegister}/>}
        {view === 'login' && <Login onLogin={handleLogin}/>}

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
