import './App.css';
import { Register, Login, Hub, Home, Createoffer } from './components'
import { useState } from 'react'
// import { registerUser, authenticateUser, retrieveUser, createOffer, retrieveOffer, saveOfferImage } from './logic'
import { registerUser, authenticateUser, retrieveUser, createOffer, retrieveOffer } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'




function App() {
  // function App(props) {
  const [fullname, setFullname] = useState('text')
  const [view, setView] = useState('home')
  const [offers, setOffers] = useState([])

  const { token } = sessionStorage


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


        retrieveUser(sessionStorage.token, (error, user) => {
          if (error) return alert(error.message)
          setFullname(user.fullname)
        })

        retrieveOffer(sessionStorage.token, (error, offersResult) => {
          if (error) return alert(error.message)

          setOffers(offersResult)

        })


        setView('hub')
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

/*   const handleCreateOffer = (offername, titleoffer, price, , pic) => {
    const { token } = sessionStorage

    try {
      createOffer(token, undefined, offername, titleoffer, price, , pic, (error, offerId) => {
        if (error) return alert(error.message)

         saveOfferImage(offerId, , pic, error => {
          if (error) return alert(error.message) 

          try {
            retrieveOffer(token, (error, offersResult) => {
              if (error) return alert(error.message)

              setOffers(offersResult)
              setView('hub')

            })
          } catch (error) {
            alert(error.message)
          }

        })

       })
     } catch (error) {
      alert(error.message)
    }
  } */

  const handleCreateOffer = (offername, titleoffer, price) => {
    const { token } = sessionStorage
    try {
      createOffer(token, undefined, offername, titleoffer, price, error => {
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
        {/*         <Route exact path='/' render={() => <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} /> } /> 
        <Route exact path='/register' render={() => <Register onRegister={handleRegister} /> } /> 
        <Route exact path='/login' render={() => <Login onLogin={handleLogin} /> } /> 
        <Route exact path='/hub' render={() => token ? <Hub/> : <Redirect to ='/'/> } /> 
        <Route exact path='/createoffer' render={() => <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer}  /> } /> 
 */}
        {view === 'home' && <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin} />}
        {view === 'hub' && <Hub onGoCreateoffer={handleGoCreateoffer} fullname={fullname} offers={offers} />}
        {view === 'createoffer' && <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer} />}

      </header>
    </div>
  );
}
export default App
// export default withRouter(App);