import './App.css';
import { Register, Login, Hub, Home, Createoffer } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser, retrieveUser, createOffer } from './logic'





function App() {
  const [fullname, setFullname] = useState('text')
  const [view, setView] = useState('home')

  const handleGoToRegister = () => {
    console.log('fue bien')

    setView('register')
  }

  const handleGoToLogin = () => {
    console.log('fue bien')

    setView('login')
  }

  const handleShowOffers = () => {
    setView('home')
  }

  const handleRegister = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        setView('login')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleLogin = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message)
        
        sessionStorage.token = token
        
        try {
          retrieveUser(sessionStorage.token, (error, user) => {
            if (error) return alert(error.message)
    
            setFullname(user.fullname)
    
          })

          setView('hub')
        } catch (error) {
          alert(error.message)
        }
      })

    } catch (error) {
      alert(error.message)
    }

  }


  const handleGoCreateoffer = () => {
    setView('createoffer')
  }

  const handleGoHub = () => {
    console.log('fue bien')

    setView('hub')
  }

  const handleCreateOffer = (offername, image, location) => {
  debugger
     const { token } = sessionStorage

        createOffer(token, { offername, image, location }, error => {
            if (error) alert(error.message)


            setView('hub')
            }) 
        
          }


  return (
    <div className="App">
      <header className="App-header">
        {view === 'home' && <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin} />}
        {view === 'hub' && <Hub onGoCreateoffer={handleGoCreateoffer} fullname={fullname} />}
        {view === 'createoffer' && <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer} />}
      </header>
    </div>
  );
}

export default App;
