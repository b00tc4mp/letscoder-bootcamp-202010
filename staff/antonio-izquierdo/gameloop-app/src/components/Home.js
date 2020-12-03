import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame } from '../logic'
import SaveGame from './SaveGame'

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

    const handleSaveGame = (name, description, budget) => {

        const { token } = sessionStorage
        try {
            debugger
            saveGame(undefined, name, description, budget, token, error => {
                if(error) return alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }
    }
 
    return <section className="home">
        <h1>Hello, {name}!</h1>
        {< SaveGame onSaveGame={handleSaveGame} />}
        {}
    </section>
}
