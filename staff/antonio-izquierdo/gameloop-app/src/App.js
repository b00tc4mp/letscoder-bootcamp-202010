import { SignUp, SignIn, Home, Access } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import context from './logic/context'
import { useState } from 'react'


export default withRouter(props => {

  const [error, setError] = useState(null)

  function feedbackError(error) {
    setError(error)
    setTimeout(() => {
        setError(null)
    }, 8000) 
}

  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return feedbackError(error.message)

        props.history.push('/sign-in')
      })
    } catch (error) {
      return feedbackError(error.message)
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
      return feedbackError(error.message)
    }
  }

  const { token } = sessionStorage

  context.API_URL = process.env.REACT_APP_API_URL


  const handleLogout = () => {

    sessionStorage.clear()

    props.history.push('/')
}

  return (
    <header className="App-header">
      <Switch>
        <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} error={error} />} />
        <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} error={error} />} />
        <Route exact path='/' render={() => token ? <Home onLogout ={handleLogout}/> : <Access />} />
      </Switch>
    </header>
  );
})

