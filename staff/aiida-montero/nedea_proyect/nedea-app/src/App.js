import {Initial, Header, Footer, SignUp, SignIn, Home, Update, Profile} from './components'
//import './App.scss';
import { useState } from 'react'
import {registerUser, authenticateUser, savePictogram} from './logic';
import {withRouter, Route, Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';


function App(props) {
  
  const handleSignUp = (fullname, email, password) => {
    try{
      registerUser(fullname, email, password, error =>{
        if(error) return alert (error.message)
         props.history.push('/sign-in')
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

        props.history.push('/home')
      })
    } catch (error) {
      alert(error.message)
    }
  }
  
  const handleGoToRegister = () =>{
    props.history.push('/sign-up')
  }

  const handleSavePictogram = (title, description) => {
    debugger
    const {token}  = sessionStorage
    try{
      savePictogram(undefined, token, title, description, (error) =>{
          if(error) return alert(error.message)
          props.history.push('/home')
      })

    }catch (error){
      alert(error.message)
    }
  }

  const handleGoToUpdate = () =>{

    props.history.push('/update')
  }

  const handleGoToHome = () =>{
    props.history.push ('/home')
  }

  const handleGoToInitial =() =>{
    props.history.push('/')
  }
  const { token } = sessionStorage

  return (
    < >
       <Header onGoToUpdate = {handleGoToUpdate} onGoToHome={handleGoToHome}  onGoInitial={handleGoToInitial}/>
      
      <Route exact path ='/update' render={()=> token ?<Update onSavePictogram= {handleSavePictogram} /> : <Redirect to = "/"/> }/>
      <Route exact path ='/' render ={() => <Initial onGoToHome = {handleGoToHome} />}/>
      <Route exact path = '/sign-up' render ={()=><SignUp onSignUp = {handleSignUp}/>}/>
      <Route exact path = '/sign-in' render = {()=> <SignIn onSignIn = {handleSignIn}/>}/>
      <Route exact path = '/home' render = {()=> <Home />}/>
      <Route exact path = '/profile' render = {()=> <Profile/>}/>
      <Footer/> 
    </>
  );
}

export default withRouter(App);
