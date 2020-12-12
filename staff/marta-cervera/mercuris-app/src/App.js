import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.css';
import { SignUp, SignIn, Home, Access, Header, Footer, SearchProducts } from './components/Index'
import { useState } from 'react'
import { registerUser, authenticateUser, findProducts } from './logic'
import context from './logic/context'


context.API_URL=process.env.REACT_APP_API_URL


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

  const handleGoToSearch = () => {

    props.history.push('/search-products')
  }

  

  return (
    <>      
      <main className="App-header">
        <Route exact path='/' render={() => <Access  onGoToSearch={handleGoToSearch} />} />
        <Route path='/sign-up' render={() => <SignUp onSignUp={handleSignUp} />} /> 
        <Route path='/sign-in' render={() => <SignIn onSignIn={handleSignIn} />} /> 
        <Route path='/search-products' render={() => <SearchProducts/>} />
        <Route path='/home' render={() => token ? <Home /> : <Redirect to ='/'/>} />
      
      </main>
      
    </>
  );
}

export default withRouter(App)
