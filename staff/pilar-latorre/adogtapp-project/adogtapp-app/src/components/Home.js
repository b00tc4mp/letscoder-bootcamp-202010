import  {Welcome}  from './'
import { useState, useEffect } from 'react'
import { retrieveUser, savePet } from '../logic'


/* import { retrieveUser, saveNote, retrieveNotes } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes' */

export default function () {

    const [view, setView] = useState('welcome')

    const [name, setName] = useState()
    //const [notes, setNotes] = useState()

    
    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { userName } = user

                setName(userName)

               /*  try {
                    retrieveNotes(token, (error, notes) => {
                        if (error) return alert(error.message)

                        setNotes(notes)
                    })
                } catch (error) {
                    alert(error.message)
                } */
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleCreatePet = (name, breed, species, color, description) => {
        const { token } = sessionStorage

        try {
            savePet( undefined, name, breed, species, color, description, token, error => {
                if (error) return alert(error.message)

                

               /*  try {
                    retrieveNotes(token, (error, notes) => {
                        if (error) return alert(error.message)

                        setNotes(notes)
                    })
                } catch (error) {
                    alert(error.message)
                } */
            })
        } catch (error) {
            alert(error.message)
        }
    } 
 
    return(
    <>
    {view === 'welcome' && <Welcome userName={name} onCreatePet={handleCreatePet}/>}
    
   {/*  <CreatePet  /> */}
        {/* <ListNotes notes={notes} /> */}
   </>
   )
}