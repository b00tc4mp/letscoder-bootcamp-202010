import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import { SignUp, SignIn, Home, Access, Header, Footer, SearchProducts } from './components'
import { useState } from 'react'
import { registerUser, authenticateUser, findProducts } from './logic'
import context from './logic/context'


context.API_URL=process.env.REACT_APP_API_URL


function App(props) {
  
  ////name, email,password, contact, address, city, phone, callback
  const [error, setError] = useState(null)

  function feedbackError(error) {
      setError(error)
      setTimeout(() => {
          setError(null)
      }, 6000) 
  }

  const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')

  const {token} = sessionStorage

  const handleSignUp = (name, email, password, contact, address, city, phone) => {
    try {
      registerUser(name, email, password, contact, address, city, phone, error => {
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

        props.history.push('/home')
      })
    } catch (error) {
       return feedbackError(error.message)
    }
  }

  const handleGoToSearch = () => {

    props.history.push('/search-products')

  }
  const handleLogout = () => {

    sessionStorage.clear()


    props.history.push('/sign-in')
}
 
  return (
    <>        
      <div className="App-header">
        <Route exact path='/' render={() => <Access  onGoToSearch={handleGoToSearch} />} />
        <Route path='/sign-up' render={() => <SignUp onSignUp={handleSignUp} error={error} />} /> 
        <Route path='/sign-in' render={() => <SignIn onSignIn={handleSignIn} error ={error}/>} /> 
        <Route path='/search-products' render={() => <SearchProducts error ={error}/>} />
        <Route path='/home' render={() => token ? <Home onLogout={handleLogout} /> : <Redirect to ='/'/>} />      
      </div>    
      
    </>
  );
}

export default withRouter(App)
