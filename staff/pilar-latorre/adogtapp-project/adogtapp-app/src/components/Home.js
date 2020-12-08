import './Welcome.sass'
import { useState, useEffect } from 'react'
import {  retrieveUser, savePet, } from '../logic'
import SearchPets from './SearchPets'
import PetResults from './PetResults'
import CreatePet from './CreatePet'



/* import { retrieveUser, saveNote, retrieveNotes } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes' */

export default function () {

    const [view, setView] = useState('home')

    const [name, setName] = useState()
 

    
    useEffect(() => {
        const { token } = sessionStorage

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
        const { token } = sessionStorage

        try {
            savePet( undefined, name, breed, species, color, description, token, (error, petId) => {
                if (error) return alert(error.message)

                /* savePetImage(petId, image, error => {
                    if (error) return alert(error.message)
                    try {
                        
                        

                        
                    } catch (error) {
                        alert(error.message)
                    }
                }) */
                alert('pet created')
               
            })
        } catch (error) {
            alert(error.message)
        }
    } 
 
    return(
    <>
    
    <h1 className="welcome__welcome">Welcome {name}!</h1>

    <button className="welcome__search" onClick={()=>{setView('search-pet')}}>SEARCH PET</button>

    <button className="welcome__create" onClick={()=>{setView('create-pet')}}>CREATE NEW PET</button>
    {view === 'home' && <div><img className="welcome__img"src="variosperretes4.jpg"/></div>}

    {view === 'search-pet' && <SearchPets />}
    {view === 'create-pet' && <CreatePet onCreatePet={handleCreatePet}/>}
    
        
 
   </>
   )
}