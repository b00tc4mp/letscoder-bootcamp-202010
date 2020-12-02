import  {Welcome}  from './'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

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

    /* const handleSaveNote = (text, visibility, tags) => {
        const { token } = sessionStorage

        try {
            saveNote(token, undefined, text, tags, visibility, error => {
                if (error) return alert(error.message)

                try {
                    retrieveNotes(token, (error, notes) => {
                        if (error) return alert(error.message)

                        setNotes(notes)
                    })
                } catch (error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    } */
 
    return(
    <>
    {view === 'welcome' && <Welcome userName={name}/>}

        
        {/* <SaveNote onSaveNote={handleSaveNote} />
        <ListNotes notes={notes} /> */}
   </>
   )
}