import './Home.sass'
import { useState, useEffect } from 'react'
import {  retrieveUser, savePet, savePetImage } from '../logic'
import SearchPets from './SearchPets'
import CreatePet from './CreatePet'
import SignIn from './SignIn'
import Feedback from './Feedback'


export default function ({onSignIn, onGoToMainSearch, onLogout}) {

    const [error, setError] = useState(null)

    const [view, setView] = useState('home')

    const [name, setName] = useState()
    const [success, setSuccess] = useState()
 
    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 4000)
    }

    const { token } = sessionStorage

    
    useEffect(() => {

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { userName } = user

                setName(userName)

              
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleCreatePet = (name, breed, species, color, description, image) => {
        try {
            savePet( undefined, name, breed, species, color, description, token, (error, petId) => {
                if (error) return feedbackError(error.message)
                
                savePetImage(petId, image, error => {
                    if (error) return feedbackError(error.message)
                    try {
                        
                        setSuccess(true)
                        setTimeout(() => {
                            setSuccess(false)
                        }, 3000)
                        
                    } catch (error) {
                        feedbackError(error.message)
                    }
                }) 
               
            })
        } catch (error) {
            feedbackError(error.message)
        }
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
    
    <button className="home__logout" onClick={()=> {
        setName(null)
        setError(null)
        onLogout()
    }}>LOGOUT</button>
    <h1 className="home__welcome">Welcome {name}!</h1>

    <div><button className="home__search" onClick={handleGoToSearch}>SEARCH PET</button>

    <button className="home__create" onClick={handleGoToCreate}>CREATE NEW PET</button></div></header>

    {error && <h2 className="home__feedback"><Feedback error={error}/></h2>}

    {success && <h2 className="home__success">PET SAVED 🐶🐱 </h2>}

    {token && view === 'home' && <div><img className="home__img"src="variosperretes4.jpg"/></div>}

    {token && view === 'search-pet' && <SearchPets />}
    {token && view === 'create-pet' && <CreatePet onCreatePet={handleCreatePet}/>}
    {!token && view === 'sign-in' && <SignIn onGoToMainSearch={onGoToMainSearch} onSignIn= {onSignIn}/>}

 
   </>
   )
}