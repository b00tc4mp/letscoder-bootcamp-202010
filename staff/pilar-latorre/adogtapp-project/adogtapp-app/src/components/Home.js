import './Home.sass'
import { useState, useEffect } from 'react'
import {  retrieveUser } from '../logic'
import SearchPets from './SearchPets'
import CreatePet from './CreatePet'
import SignIn from './SignIn'
import Feedback from './Feedback'


export default function ({onSignIn, onGoToMainSearch, onLogout}) {

    const [error, setError] = useState(null)

    const [view, setView] = useState('home')
    const [name, setName] = useState()
    
 
    function handleError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 4000)
    }

    const { token } = sessionStorage

    
    useEffect(() => {

        try {
            retrieveUser(token, (error, user) => {
                if (error) return handleError(error.message)

                const { userName } = user

                setName(userName)

              
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    
    const handleCreated = () => {

        setView()

    }
    
    const handleGoToSearch = () => {

        setView('search-pet')
      }

    const handleGoToCreate = () => {

        setView('create-pet')
      }


 
    return(
    <>
    <header className="home">
    
    <div><button className="home__logout" onClick={()=> {
        setName(null)
        setError(null)
        onLogout()
    }}>LOGOUT</button>
    <h1 className="home__welcome">Welcome {name} !</h1></div>

    <button className="home__search" onClick={handleGoToSearch}>SEARCH PET</button>

    <button className="home__create" onClick={handleGoToCreate}>CREATE NEW PET</button></header>

    {error && <h2 className="home__feedback"><Feedback error={error}/></h2>}

    

    {token && view === 'home' && <div><img className="home__img"src="variosperretes4.jpg"/></div>}

    {token && view === 'search-pet' && <SearchPets onError ={handleError}/>}
    {token && view === 'create-pet' && <CreatePet onCreated={handleCreated} onError ={handleError} />}
    {!token && view === 'sign-in' && <SignIn onGoToMainSearch={onGoToMainSearch} onSignIn= {onSignIn}/>}

 
   </>
   )
}