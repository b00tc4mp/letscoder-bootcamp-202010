// import './Home.sass'
import './Results.sass'

import Welcome from './Welcome'
import { retrieveUser, retrieveNotes } from '../logic'
import { useEffect, useState } from 'react'
import NoteEditor from './NoteEditor'
import Results from './Results'
import SearchUser from './SearchUser'


function Home() {
    const [user, setUser] = useState()
    const [notes, setNotes] = useState()
    const [success, setSuccess] = useState()


    useEffect(() => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }

    }, [])

    const handleRetrieveUser = () => {

        const { token } = sessionStorage
        
        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)
                
                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }
    const onSavedNote = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 4000)
    }
    
    const handleRetrieveNotes = () => {
        const { token } = sessionStorage
        
        try {
            retrieveNotes(token, (error, notes) => {
                if (error) return alert(error.message)
                setNotes(notes)
            })
        } catch (error) {
            alert(error.message)
        }
    }



    return <>
        <h1>HOME </h1>
        {/* {user ? <h1>HOME {user.fullname} </h1> : <h1>HOME </h1>} */}
        {/* <Welcome /> */}
        {user && <Welcome user={user} />}
        <SearchUser onfollowedUser={handleRetrieveUser} />
        <button onClick={handleRetrieveNotes}>My Notes</button>
        {user && <NoteEditor onSavedNote={onSavedNote} />}
        {success && <h2>Su nota se guardo correctamente</h2>}
        {notes && <Results results={notes} onDelete={handleRetrieveNotes} />}
    </>


}

export default Home