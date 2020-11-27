import './Results.sass'
import Welcome from './Welcome'
import {retrieveUser, retrieveNotes, findUsers} from '../logic'
import { useEffect, useState } from 'react'
import NoteEditor from './NoteEditor'
import Results from './Results'
import FindUsers from './FindUsers'

function Home() {
    const [user, setUser] = useState()
    const [notes, setNotes] = useState()
    const [success, setSuccess] = useState()
    const [token, setToken] = useState()
    const [query, setResults] = useState()


    useEffect( () => {
        const { token } = sessionStorage
        setToken(token)

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
            retrieveNotes(token, (error, notes) => {
                if (error) return alert(error.message)
                setNotes(notes)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleFindUsers = () => {
        try {
            FindUsers(query,( error, results) =>{
                if (error) return alert(error.message)
                setResults(results)
            })

        }catch(error) {
            alert(error.message)


        }

    }



    return <>
       
        {/* {user ? <h1>HOME {user.fullname} </h1> : <h1>HOME </h1>} */}
        {/* <Welcome /> */}
        {user && <Welcome user={user} />}
        <button className = "myNotes"onClick={handleRetrieveNotes} >Check your Notes</button>
        <button className = "FindUsers"onClick={handleFindUsers} >Check the Users</button>
        {user && <NoteEditor onSavedNote={onSavedNote} userId={user.id} _token={token} />}
        {success && <h2>Su nota se ha guardado correctamente 🤩 </h2>}
        {notes && <Results results={notes} />}
    </>


}

export default Home