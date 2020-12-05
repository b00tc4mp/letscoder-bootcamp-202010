import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame } from '../logic'
import SaveGame from './SaveGame'
//import FindGames from './FindGames'

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

    const handleSaveGame = (name, description, gameconsole, budget) => {

        const { token } = sessionStorage
        try {
            debugger
            saveGame(undefined, name, description, gameconsole, budget, token, error => {
                if(error) return alert(error.message)
            })
        } catch (error) {
            alert(error.message)
        }
    }
 
    return <section className="home">
        <h1>Hello, {name}!</h1>
        {<SaveGame onSaveGame={handleSaveGame} />}
        {/* {<FindGames />} */}
    </section>
}
