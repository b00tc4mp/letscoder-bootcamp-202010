import { SignUp, SignIn, Home, Access } from './components'
import{ registerUser, authenticateUser } from './logic'
import { Route, withRouter, Redirect } from 'react-router-dom'

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

        props.history.push('/')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoToSignIn = () => {

    props.history.push('/sign-in')
  }

  const handleGoToSignUp = () => {

    props.history.push('/sign-up')
  }

  const handleGoToSearch = () => {

    props.history.push('/')
  }

  const { token } = sessionStorage

  return (
      <header className="App-header">

        <Route path='/access' render={() => token ? <Redirect to="/" /> : <Access onGoToSignUp={handleGoToSignUp} onGoToSignIn={handleGoToSignIn} onGoToSearch={handleGoToSearch}/>} />
        <Route path='/sign-up' render={() => token ? <Redirect to="/" /> : <SignUp onSignUp={handleSignUp} />} />
        <Route path='/sign-in' render={() => token ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn} />} />
        <Route exact path='/' render={() => token ? <Home /> : <Redirect to="/access" />} />

  {/*     <button onClick={() => props.history.push('/items/1239711293712389/color/red')}>Go to one detail RED (demo)</button>
      <button onClick={() => props.history.push('/items/1239711293712390/color/green')}>Go to one detail GREEN (demo)</button>
      <button onClick={() => props.history.push('/items/1239711293712391/color/blue')}>Go to one detail BLUE (demo)</button>
      
      <Route path='/items/:itemId/color/:color' render={props => {const { match: { params: { itemId, color } } } = props
      
      return <Detail itemId={itemId} color={color} />
      }} /> */}
      </header>
  );
})

