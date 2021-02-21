// import './Home.sass'
import './Results.sass'

import Welcome from './Welcome'
import { retrieveUser, retrieveNotes, retrievePublicNotes } from '../logic'
import { useEffect, useState } from 'react'
import NoteEditor from './NoteEditor'
import Results from './Results'
import SearchUser from './SearchUser'
import SaveProducts from './SaveProducts'


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
    const onSavedProduct = () => {
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

    const handleRetrievePublicNotes = () => {
        const { token } = sessionStorage

        try {
            retrievePublicNotes(token, user.follows ? user.follows : [], (error, notes) => {
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
        {/* {user && <Welcome user={user} />}
        <SearchUser onfollowedUser={handleRetrieveUser} />
        <button onClick={handleRetrieveNotes}>My Notes</button>
        <button onClick={handleRetrievePublicNotes}>Public Notes</button>
        {user && <NoteEditor onSavedNote={onSavedNote} />}
    {notes && <Results results={notes} onDelete={handleRetrieveNotes} />} */}
        {success && <h2>Su producto se guardo correctamente</h2>}
        <SaveProducts onSavedProduct={onSavedProduct} />
    </>


}

export default Home