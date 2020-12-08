import { SignUp, SignIn, Home, Main } from './components'
import { registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

export default withRouter(props => {

  const handleSignUp = (userName, email, password, address, city, phone, description) => {
    try {
      registerUser(userName, email, password, address, city, phone, description, error => {
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

  const handleGoToMain = () => {

    props.history.push('/main')
  }

  const { token } = sessionStorage

  return (
    <div className="App">
      <header className="App-header">

      <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} />} />
      <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} onGoToMain = {handleGoToMain}/>} />
      <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/sign-in" />} />
      <Route path='/main' render = {()=> <Main/> }/>
      

      </header>
    </div>
  );
})
