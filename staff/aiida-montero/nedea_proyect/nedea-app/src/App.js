import {Initial, Header, Footer, SignUp, SignIn, Home, Update, Profile, MyPictograms} from './components'

import {registerUser, authenticateUser, savePictogram, savePictogramImage, retrievePictograms, retrieveUser, modifyPictogram} from './logic';
import {withRouter, Route, Redirect } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {searchPictogramsByUser, deletePictogram} from './logic'





function App(props) {
  const [error, setError] = useState(null)
  let [fullname, setFullname] = useState(null)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  

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
    setFullname(null)
    sessionStorage.removeItem('token');
    props.history.push('/')
  }
  const { token } = sessionStorage

  const handleUser = (fullname) => {
    setFullname(fullname)

  }

  const handleModify = (title, description) => {
    try {
      const {token} = sessionStorage

      modifyPictogram(token, {title, description}, (error, changes) => {
        if(error) return feedbackError('could not find any changes')

        
      })
      setTitle(title)
      setDescription(description)

    }catch(error){

    }

  }

  const handleDelete = (id) => {
    const { token } = sessionStorage
    deletePictogram (id, token, error => {
      console.log(error)
      try {
        searchPictogramsByUser(token, pictograms => {
          if (error) return feedbackError(error.message)
         setPictograms(pictograms)
      });
      } catch (error) {
          feedbackError(error.message)
      }    
    })
    ;
   
  }

  return (
    < >

      {token && <Header onGoToUpdate = {handleGoToUpdate} onGoToHome={handleGoToHome}  onGoInitial={handleGoToInitial}/> }
      <Route exact path ='/update' render={()=> token ?<Update onSavePictogram= {handleSavePictogram} pictograms = {pictograms} onModify = {handleModify} title = {title} description= {description}  onDeletePictogram={handleDelete} /> :
      <Redirect to = "/"/> }/>
      <Route exact path ='/' render ={() => <Initial onGoToHome = {handleGoToHome} />}/>
      <Route exact path = '/sign-up' render ={()=><SignUp onSignUp = {handleSignUp} error = {error} onGoToInitial = {handleGoToInitial}/>}/>
      <Route exact path = '/sign-in' render = {()=> <SignIn onSignIn = {handleSignIn} error = {error} onGoToInitial = {handleGoToInitial}/>}/>
      <Route exact path = '/home' render = {()=> <Home onSetUser = {handleUser} fullname = {fullname} onGoToInitial = {handleGoToInitial}/>}/>
      <Route exact path = '/profile' render = {()=> <Profile/>}/>
    </>
  );
}

export default withRouter(App);
