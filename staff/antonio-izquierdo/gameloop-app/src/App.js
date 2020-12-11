import { SignUp, SignIn, Home, Access } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import context from './logic/context'


export default withRouter(props => {

  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if (error) return alert(error.message)

        props.history.push('/sign-in')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message)

        sessionStorage.token = token

        props.history.push('/')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const { token } = sessionStorage

  context.API_URL = process.env.REACT_APP_API_URL

  return (
    <header className="App-header">
      <Switch>
        <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} />} />
        <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} />} />
        <Route path='/' render={() => token ? <Home /> : <Access />} />
      </Switch>
    </header>
  );
})

