import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'

/* import { retrieveUser, saveNote, retrieveNotes } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes' */

export default function () {
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
 
    return <section className="home">
        
        <h1 className="home__welcome">Welcome {name}!</h1>
        <div>
        <input className="home__input" type="search" name="search" placeholder="search pet"/>
        <button className="home__search">SEARCH PET</button>
        </div>
        <button className="home__create">CREATE NEW PET</button>
        <div>
        <img className="home__img"src="paw.jpg"/>
        </div>


        
        {/* <SaveNote onSaveNote={handleSaveNote} />
        <ListNotes notes={notes} /> */}
    </section>
}