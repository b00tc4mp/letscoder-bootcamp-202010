import {Initial, Header, Footer, SignUp, SignIn, Home, Update, Search} from './components'
//import './App.scss';
import { useState } from 'react'
import {registerUser, authenticateUser, savePictogram} from './logic';
import {withRouter, Route, Redirect } from 'react-router-dom';


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

        props.history.push('/')
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
          props.history.push('/initial')
      })

    }catch (error){
      alert(error.message)
    }
  }

  const handleGoToUpdate = () =>{

    props.history.push('/update')
  }

  const handleGoToHome = () =>{
    props.history.push ('/')
  }

  const { token } = sessionStorage

  return (
    < >
       <Header onGoToUpdate = {handleGoToUpdate} onGoToHome={handleGoToHome} />
      
      <Route path ='/update' render={()=> token ? <Redirect to = "/"/> : <Update onSavePictogram= {handleSavePictogram} />}/>
      <Route path ='/initial' render ={() => <Initial onGoToRegister = {handleGoToRegister}/>}/>
      <Route path = '/sign-up' render ={()=><SignUp onSignUp = {handleSignUp}/>}/>
      <Route path = '/sign-in' render = {()=> <SignIn onSignIn = {handleSignIn}/>}/>
      <Route exact path = '/' render = {()=> <Home/>}/>
      {/* {view === 'update'  && <Update  onSavePictogram = {handleSavePictogram}/>} */}
      {/* {view === 'initial' && <Initial onGoToRegister = {handleGoToRegister}/> } */}
     {/*  {view === 'sign-up' && <SignUp onSignUp={handleSignUp} />} */}
      {/* {view === 'sign-in' && <SignIn onSignIn={handleSignIn} />} */}
     {/*  {view === 'home' && <Home/>}   */} 
      
      <Footer/> 
    </>
  );
}

export default withRouter(App);
