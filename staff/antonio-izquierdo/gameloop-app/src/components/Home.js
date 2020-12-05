import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame } from '../logic'
import SaveGame from './SaveGame'
import SearchGames from './SearchGames'
//import FindGames from './FindGames'

export default function Home () {
    const [name, setName] = useState()
    const [view, setView] = useState(sessionStorage.token? 'home' :'access')

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

   /*  const handleGoToFindGames = () => {

        setView('find-games')
      }
  */
    return <section className="home">
        <h1>Hello, {name}!</h1>
        {/* {view === 'access' && <Access onGoToSignUp={handleGoToSignUp} onGoToSignIn={handleGoToSignIn} onGoToSearch={handleGoToSearch} />} */}
        {view === 'home' && <SaveGame onSaveGame={handleSaveGame} />}
        {view === 'home' && <SearchGames />}
    </section>
}
