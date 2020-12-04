import {Initial, Header, Footer, SignUp, SignIn, Home, Update, Search} from './components'
//import './App.scss';
import { useState } from 'react'
import {registerUser, authenticateUser, savePictogram} from './logic';

function App() {
  const [view, setView] = useState(sessionStorage.token? 'home' : 'home')
  
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

  const handleSavePictogram = (title, description) => {
    debugger
    const {token}  = sessionStorage
    try{
      savePictogram(undefined, token, title, description, (error) =>{
          if(error) return alert(error.message)
          setView('initial')
      })

    }catch (error){
      alert(error.message)
    }
  }

  const handleGoToUpdate = () =>{

    setView('update')
  }

  const handleGoToHome = () =>{
    setView ('home')
  }
  return (
    < >
       <Header onGoToUpdate = {handleGoToUpdate} onGoToHome={handleGoToHome} />
       
      {view === 'update'  && <Update  onSavePictogram = {handleSavePictogram}/>}
      {view === 'initial' && <Initial onGoToRegister = {handleGoToRegister}/> }
      {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />}
      {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />}
      {view === 'home' && <Home/>}  
      <Footer/>
    </>
  );
}

export default App;
