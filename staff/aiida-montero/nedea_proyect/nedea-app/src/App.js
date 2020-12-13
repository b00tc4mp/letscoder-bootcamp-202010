import {Initial, Header, Footer, SignUp, SignIn, Home, Update, Profile, MyPictograms} from './components'

import {registerUser, authenticateUser, savePictogram, savePictogramImage, retrievePictograms} from './logic';
import {withRouter, Route, Redirect } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {searchPictogramsByUser} from './logic'




function App(props) {
  const [error, setError] = useState(null)

  function feedbackError(error) {
      setError(error)
      setTimeout(() => {
          setError(null)
      }, 6000) 
  }
   const [pictograms, setPictograms] = useState([])
  useEffect(()=>{
    const { token } = sessionStorage;

    if (token) {
      

      searchPictogramsByUser(token, pictograms => {
          setPictograms(pictograms);
      });
  }

}, []); 

  
  const handleSignUp = (fullname, email, password) => {
    try{
      registerUser(fullname, email, password, error =>{
        if(error) return feedbackError (error.message)
         props.history.push('/sign-in')
      })
    }catch(error){
      feedbackError(error.message)
    }
  }

  const handleSignIn = (email, password) => {
    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return feedbackError(error.message)

        sessionStorage.token = token

          searchPictogramsByUser(token, pictograms => {
              setPictograms(pictograms);
          });
      
        props.history.push('/home')
      })
    } catch (error) {
      feedbackError(error.message)
    }
  }
  
  const handleSavePictogram = (title, description,image) => {
    const {token}  = sessionStorage
    try{
      savePictogram(undefined, token, title, description, (error,pictogramId) =>{
          if(error) return feedbackError(error.message)
         
         savePictogramImage(pictogramId, image, error => {
          if (error) return feedbackError(error.message)
          
          try {
            searchPictogramsByUser(token, pictograms => {
              if (error) return feedbackError(error.message)
              /*  props.history.push('/home') */
             setPictograms(pictograms)
          });
          } catch (error) {
              feedbackError(error.message)
          }
      })


      })

    }catch (error){
      feedbackError(error.message)
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
      
      <Route exact path ='/update' render={()=> token ?<Update onSavePictogram= {handleSavePictogram} pictograms = {pictograms} /> :
       <Redirect to = "/"/> }/>
      <Route exact path ='/' render ={() => <Initial onGoToHome = {handleGoToHome} />}/>
      <Route exact path = '/sign-up' render ={()=><SignUp onSignUp = {handleSignUp} error = {error}/>}/>
      <Route exact path = '/sign-in' render = {()=> <SignIn onSignIn = {handleSignIn} error = {error}/>}/>
      <Route exact path = '/home' render = {()=> <Home />}/>
      <Route exact path = '/profile' render = {()=> <Profile/>}/>

      <Footer/> 
    </>
  );
}

export default withRouter(App);
