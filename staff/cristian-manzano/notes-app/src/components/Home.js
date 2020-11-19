import './Home.sass'
import { useState, useEffect } from 'react'
import Note from './Note'
import { retrieveUser } from '../logic'
import saveNote from '../logic/save-note'


export default function () {
    const [name, setName] = useState()

    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user

                setName(fullname)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handlePublishNote = (text, tags, owner, visibility) => {
        try {
            saveNote(text, tags, owner, visibility, error => {
                if (error) return alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="home">
        <h1>Hello, {name}!</h1>

        <Note onSaveNote={handlePublishNote}/>
    </section>
}