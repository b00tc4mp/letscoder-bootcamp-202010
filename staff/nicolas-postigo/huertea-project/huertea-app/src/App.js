import './App.css';
import { Register, Login, Hub, Home, Createoffer, Useroffers } from './components'
import { useState } from 'react'
// import { registerUser, authenticateUser, retrieveUser, createOffer, retrieveOffer, saveOfferImage } from './logic'
import { registerUser, authenticateUser, retrieveUser, createOffer, retrieveOffer, retrieveUserOffer, saveOfferImage } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { BrowserRouter as Switch } from "react-router-dom";



// function App() {
function App(props) {
  console.log(props)
  const [fullname, setFullname] = useState('text')
  const [view, setView] = useState('')
  const [offers, setOffers] = useState([])
  const [useroffers, setUseroffers] = useState([])



  const { token } = sessionStorage


  const handleGoToRegister = () => {
    console.log('fue bien')


    // setView('register')
    props.history.push('/register')
  }

  const handleGoToLogin = () => {
    console.log('fue bien')


    // setView('login')
    props.history.push('/login')
  }

  const handleShowOffers = () => {

    props.history.push('/')
  }

  const handleRegister = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        props.history.push('/login')
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



        props.history.push('/hub')
      })

    } catch (error) {
      alert(error.message)
    }

  }


  const handleGoCreateoffer = () => {
    props.history.push('/createoffer')


  }


  const handleGoHub = () => {
    console.log('fue bien')



    props.history.push('/hub')
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

  const handleCreateOffer = ({ offername, titleoffer, price, pic, offeraddress, phonecontact, emailcontact }) => {
    debugger
    const { token } = sessionStorage
    try {
      createOffer(token, undefined, offername, titleoffer, price, offeraddress, phonecontact, emailcontact, (error, offerId) => {
        if (error) return alert(error.message)

        saveOfferImage(offerId, pic, error => {
          if (error) return alert(error.message)

          try {
            retrieveOffer(token, (error, offersResult) => {
                if (error) return alert(error.message)

                setOffers(offersResult)
            })
        } catch (error) {
            alert(error.message)
        }


        })
      })
      props.history.push('/hub')

    } catch (error) {
      alert(error.message)
    }
  }



  const handleRetrieveUserOffers = () => {
    debugger
    try {

      retrieveUserOffer(sessionStorage.token, (error, offersResult) => {
        if (error) return alert(error.message)

        setUseroffers(offersResult)
        props.history.push('/hub')

      })




    } catch (error) {
      alert(error.message)
    }

  }



  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' render={() => <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} />} />
        <Route exact path='/register' render={(props) => <Register onRegister={handleRegister} {...props} />} />
        <Route exact path='/login' render={() => <Login onLogin={handleLogin} />} />
        <Route exact path='/hub' render={() => token ? <Hub onGoCreateoffer={handleGoCreateoffer} fullname={fullname} offers={offers} useroffers={useroffers} onRetrieveUserOffers={handleRetrieveUserOffers} /> : <Redirect to='/' />} />
        <Route exact path='/createoffer' render={() => <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer} />} />


        {/**          {view === 'home' && <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin} />}
        {view === 'hub' && <Hub onGoCreateoffer={handleGoCreateoffer} fullname={fullname} offers={offers} useroffers={useroffers} onRetrieveUserOffers={handleRetrieveUserOffers} />}
        {view === 'createoffer' && <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer} />}
 */}
      </header>
    </div>
  );
}
// export default App
export default withRouter(App);