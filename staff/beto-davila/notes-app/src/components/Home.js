import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveNote, retrieveNotes, searchUsers } from '../logic'
import SaveNote from './SaveNote'
import ListNotes from './ListNotes'
import SearchUsers from './SearchUsers'

//const Home = () => {
    export default function () {
        const [name, setName] = useState()

        const [notes, setNotes] = useState() 

        const [users, setUsers] = useState()

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
            try {
                saveNote( token, undefined, text, tags, visibility, (error) => {
                    if (error) return alert(error.message)
            
                        retrieveNotes( token, (error, notes) => {
                            if (error) return alert(error.message)
            
                            setNotes(notes)
                        })
                })
                
            } catch (error) {
                return alert(error.message)
            }
        }

        const handleSearchUsers = q => {
            try {
                searchUsers(q, (error, users) => {
                    if (error) return alert(error.message)
    
                    setUsers(users)
                })
                
            } catch (error) {
                return alert(error.message)
            }
        }

    
        return <section className="home">
            <h1 className="home__title">Welcome, <span className="home__fullname">{name}</span>!</h1>

            <SearchUsers users={users} onSearch={handleSearchUsers}/>

            <SaveNote onSave={handleSaveNote}/>

            <ListNotes notes={notes} />

        </section>
}

//export default Home