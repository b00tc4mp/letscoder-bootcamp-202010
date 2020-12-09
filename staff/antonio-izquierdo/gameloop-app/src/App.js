import { SignUp, SignIn, Home, Access } from './components'
import{ registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import context from './logic/context'


export default withRouter(props => {
  
  const handleSignUp = (fullname, email, password) => {
    try {
      registerUser(fullname, email, password, error => {
        if(error) return alert(error.message)

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

        props.history.push('/home')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const { token } = sessionStorage

  context.API_URL=process.env.REACT_APP_API_URL

  return (
      <header className="App-header">
        <Route exact path='/' render={() => token ? <Home/> : <Access /> } />
        <Route exact path='/sign-up' render={() =>token ? <Home/> : <SignUp onSignUp={handleSignUp} />} />
        <Route exact path='/sign-in' render={() => token ? <Home/> : <SignIn onSignIn={handleSignIn} />} />
        { <Route exact path='/home' render={() => token ? <Home/> : <Redirect to='/' />} /> }
      </header>
  );
})

