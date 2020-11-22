import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveNote, retrieveNotes } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes'

//const Home = () => {
    export default function () {
        const [name, setName] = useState()

        const [notes, setNotes] = useState() 

        const { token } = sessionStorage

        useEffect(() => {

            try {
                retrieveUser(token, (error, user) => {
                    if (error) return alert(error.message)

                    const { fullname } = user
                    setName(fullname)

                    retrieveNotes( token, (error, notes) => {
                        if (error) return alert(error.message)
        
                        setNotes(notes)
                    })
                })
            } catch (error) {
                return alert(error.message)  
            }
        }, [])

        const handleSaveNote = (text, tags, visibility) => {
            saveNote( token, undefined, text, tags, visibility, (error) => {
                if (error) return alert(error.message)
        
                    retrieveNotes( token, (error, notes) => {
                        if (error) return alert(error.message)
        
                        setNotes(notes)
                    })
            })
        }

    
        return <section className="home">
            <h1 className="home__title">Welcome, <span className="home__fullname">{name}</span>!</h1>

            <SaveNote onSave={handleSaveNote}/>

            <ListNotes notes={notes} />

        </section>
}

//export default Home