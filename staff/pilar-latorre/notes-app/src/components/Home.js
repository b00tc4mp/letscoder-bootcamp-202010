import './Results.sass'
import Welcome from './Welcome'
import {retrieveUser, retrieveNotes} from '../logic'
import { useEffect, useState } from 'react'
import NoteEditor from './NoteEditor'
import Results from './Results'

function Home() {
    const [user, setUser] = useState()
    const [notes, setNotes] = useState()
    const [success, setSuccess] = useState()


    useEffect( () => {
        const { token } = sessionStorage

        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }

    },[]) 

    const onSavedNote = () =>{
        setSuccess(true)
    }

    const handleRetrieveNotes = () => {

        try {
            retrieveNotes(user._id, (error, notes) => {
                if (error) return alert(error.message)
                setNotes(notes)
            })
        } catch (error) {
            alert(error.message)
        }
    }



    return <>
       
        {/* {user ? <h1>HOME {user.fullname} </h1> : <h1>HOME </h1>} */}
        {/* <Welcome /> */}
        {user && <Welcome user={user} />}
        <button className = "myNotes"onClick={handleRetrieveNotes}>Check your Notes</button>
        {user && <NoteEditor onSavedNote={onSavedNote} userId={user._id} />}
        {success && <h2>Su nota se ha guardado correctamente 🤩 </h2>}
        {notes && <Results results={notes} />}
    </>


}

export default Home