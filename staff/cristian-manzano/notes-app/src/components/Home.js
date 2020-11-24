import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveNote, retrieveNotes } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes'
import SearchNotes from './SearchNotes'

export default function () {
    const [name, setName] = useState()
    const [notes, setNotes] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user

                setName(fullname)

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
    }, [])

    const handleSaveNote = (text, visibility, tags) => {
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
    }

    const handleSearchNotes = (user, search, tags, error => {
        const { token } = sessionStorage

        if (error) return alert(error.message)

        try {
            retrieveNotes(token, user, tags, (error, notes) => {
                if (error) return alert(error.message)

                setNotes(notes)
            })
        } catch (error) {
            alert(error.message)
        }
    })

    return <section className="home">
        <h1>Hello, {name}!</h1>
        <SaveNote onSaveNote={handleSaveNote} />
        <ListNotes notes={notes} />
        <SearchNotes onSearchNote={handleSearchNotes}/>
    </section>
}