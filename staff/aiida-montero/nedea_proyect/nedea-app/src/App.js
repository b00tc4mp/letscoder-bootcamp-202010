import {Initial, Header, Footer, SignUp, SignIn, Home} from './components'
//import './App.scss';
import { useState } from 'react'
import {registerUser, authenticateUser} from './logic';

function App() {
  const [view, setView] = useState(sessionStorage.token? 'initial' : 'sign-up')
  
  const handleSignUp = (fullname, email, password) => {
    try{
      registerUser(fullname, email, password, error =>{
        if(error) return alert (error.message)
         setView('sign-in')
      })
    }catch(error){
      alert(error.message)
    }
  }

  const handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message)

        sessionStorage.token = token

        setView('home')
      })
    } catch (error) {
      alert(error.message)
    }
  }
  
  const handleGoToRegister = () =>{
    setView('sign-up')
  }
  return (
    < >
   
      <Header/>
      {view === 'initial' && <Initial onGoToRegister = {handleGoToRegister}/> }
      {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />}
      {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />}
      {view === 'home' && <Home/>} 
      <Footer/>
    </>
  );
}

export default App;
