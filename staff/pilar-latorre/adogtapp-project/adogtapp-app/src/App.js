import { SignUp, SignIn, Home } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import SearchPets from './components/SearchPets'
import { useState } from 'react'

export default withRouter(props => {

  const [error, setError] = useState(null)

  function feedbackError(error) {
    setError(error)
    setTimeout(() => {
        setError(null)
    }, 4000)
}

  const handleSignUp = (userName, email, password, address, city, phone, description) => {
    try {
      registerUser(userName, email, password, address, city, phone, description, error => {
        if (error) return feedbackError(error.message)
            
        props.history.push('/sign-in')
      })
    } catch (error) {
      feedbackError(error.message)
    }
  }

  const handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return feedbackError(error.message)

        sessionStorage.token = token

        props.history.push('/')
      })
    } catch (error) {
      feedbackError(error.message)
    }
  }

  const handleGoToMainSearch = () => {

    props.history.push('/mainSearch')
  }

  const handleLogout = () => {

    sessionStorage.clear()


    props.history.push('/sign-in')
}

  const handleGoToSignIn = () => {
  
    props.history.push('/sign-in')
  
  }
  

  const { token } = sessionStorage

  return (
    <div className="App">
      <header className="App-header">

      <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} error ={error}/>} />
      <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} onGoToMainSearch = {handleGoToMainSearch} error ={error}/>} />
      <Route exact path='/' render={() => token ? <Home onSignIn={handleSignIn} onGoToMainSearch = {handleGoToMainSearch} error ={error} onLogout = {handleLogout}/> : <Redirect to="/sign-in" />} />
      <Route path='/mainSearch' render = {()=> <SearchPets error ={error} onGoToSignIn={handleGoToSignIn}/> }/>
      

      </header>
    </div>
  );
})
