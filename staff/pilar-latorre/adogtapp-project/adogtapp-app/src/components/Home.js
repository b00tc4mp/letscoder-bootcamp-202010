import './Home.sass'
import { useState, useEffect } from 'react'
import {  retrieveUser, savePet, savePetImage } from '../logic'
import SearchPets from './SearchPets'
import CreatePet from './CreatePet'





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
        debugger
        const { token } = sessionStorage
     
        try {
            savePet( undefined, name, breed, species, color, description, token, (error, petId) => {
                if (error) return alert(error.message)
                
                savePetImage(petId, image, error => {
                    if (error) return alert(error.message)
                    try {
                        
                        alert('pet created')
                        
                    } catch (error) {
                        alert(error.message)
                    }
                }) 
               
            })
        } catch (error) {
            alert(error.message)
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
    <h1 className="home__welcome">Welcome {name}!</h1>
    
    <button className="home__search" onClick={handleGoToSearch}>SEARCH PET</button>

    <button className="home__create" onClick={handleGoToCreate}>CREATE NEW PET</button></header>
    {view === 'home' && <div><img className="home__img"src="variosperretes4.jpg"/></div>}

    {view === 'search-pet' && <SearchPets />}
    {view === 'create-pet' && <CreatePet onCreatePet={handleCreatePet}/>}
    
        
 
   </>
   )
}