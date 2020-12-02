import './App.css';
import { Register, Login, Hub, Home, Createoffer } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser, retrieveUser, createOffer, retrieveOffer } from './logic'





function App() {
  const [fullname, setFullname] = useState('text')
  const [view, setView] = useState('home')
  const [offers, setOffers] = useState('offers')

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
          try {
            retrieveOffer(sessionStorage.token, (error, offers) => {
              if (error) return alert(error.message)
              debugger
              setOffers(offers)
            })
          } catch (error) {
            alert(error.message)
          }
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

  const handleCreateOffer = (offername, titleoffer, image) => {
    const { token } = sessionStorage

    try {
      createOffer(token, undefined, offername, titleoffer, image, error => {
        if (error) return alert(error.message)

        setView('hub')
      })
    } catch (error) {
      alert(error.message)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        {view === 'home' && <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin} />}
        {view === 'hub' && <Hub onGoCreateoffer={handleGoCreateoffer} fullname={fullname} offers={offers} />}
        {view === 'createoffer' && <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer} />}
      </header>
    </div>
  );
}

export default App;