import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import { SignUp, SignIn, Home, Access, Header, Footer, SearchProductClient } from './components/Index'
import { useState } from 'react'
import { registerUser, authenticateUser } from './logic'
import {Link} from 'react-router-dom'


function App(props) {

  const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')

  const {token} = sessionStorage

  const handleSignUp = (name, email, password) => {
    try {
      registerUser(name, email, password, error => {
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

        props.history.push('/home')
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

    props.history.push('/search-product-client')
  }

  return (
    <>
      <Header></Header>
      <main className="App-header">
        <Route exact path='/' render={() => <Access onGoToSignIn={handleGoToSignIn} onGoToSignUp={handleGoToSignUp} onGoToSearch={handleGoToSearch} />} />
        <Route exact path='/sign-up' render={() => <SignUp onSignUp={handleSignUp} />} /> <Link to = '/sign-in'>Redirect to Sign In</Link>
        <Route exact path='/sign-in' render={() => <SignIn onSignIn={handleSignIn} />} /> <Link to = '/sign-up'>Redirect to Sign Up</Link>
        <Route exact path='/search-product-client' render={() => <SearchProductClient />} />
        <Route exact path='/home' render={() => token ? <Home /> : <Redirect to ='/'/>} />
        {/* {view === 'access' && <Access onGoToSignIn={handleGoToSignIn} onGoToSignUp={handleGoToSignUp} onGoToSearch={handleGoToSearch} />}
        {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />}
        {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />}
        {view === 'search' && <SearchProductClient />}
        {view === 'home' && <Home />} */}
      </main>
      <Footer></Footer>
    </>
  );
}

export default withRouter(App)
