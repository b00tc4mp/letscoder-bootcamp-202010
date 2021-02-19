import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveNote, retrieveNotes, saveNoteImage, findNotes } from '../logic'
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

    const handleSaveNote = (text, visibility, tags, image) => {
        const { token } = sessionStorage
        debugger

        try {
            saveNote(token, undefined, text, tags, visibility, (error, noteId) => {
                if (error) return alert(error.message)

                saveNoteImage(token, noteId, image, error => {
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

            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSearchNotes = (query, tags, visibility, fromYear, toYear) => {
        try {
            findNotes(query, tags, visibility, fromYear, toYear)
                .then(console.log)
                .catch(alert)
        } catch(error) {
            alert(error)
        }
    }

    return <section className="home">
        <h1>Hello, {name}!</h1>
        <SearchNotes onSearch={handleSearchNotes} />
        <SaveNote onSaveNote={handleSaveNote} />
        <ListNotes notes={notes} />
    </section>
}