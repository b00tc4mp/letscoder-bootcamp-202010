import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame, findGames, saveGameImage } from '../logic'
import { Route, withRouter, Redirect } from 'react-router-dom'
import SaveGame from './SaveGame'
import SearchGames from './SearchGames'
//import FindGames from './FindGames'

export default function Home() {
    const [name, setName] = useState()
    const [games, setGames] = useState()
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')

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

    const handleSaveGame = (name, description, gameconsole, budget, image) => {

        const { token } = sessionStorage
        try {
            debugger
            saveGame(undefined, name, description, gameconsole, budget, token, (error, gameId) => {
                if (error) return alert(error.message)

                saveGameImage(gameId, image, error => {
                    if (error) return alert(error.message)

                    try {
                        alert('game saved')
                        /*  findGames(token, (error, games) => {
                             if (error) return alert(error.message)
         
                             setGames(games)
                         })  */
                    } catch (error) {
                        alert(error.message)
                    }
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSearchGames = (query, gameconsole, budget, priceMin, priceMax) => {
        try {
            findGames(query, gameconsole, budget, priceMin, priceMax, (error, games) => {
                if (error) return alert(error.message)
                setGames(games)
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <section className="home">
        <h1>Hello, {name}!</h1>
        {/* {view === 'access' && <Access onGoToSignUp={handleGoToSignUp} onGoToSignIn={handleGoToSignIn} onGoToSearch={handleGoToSearch} />} */}
        {view === 'home' && <SaveGame onSaveGame={handleSaveGame} />}
        {view === 'home' && <SearchGames onSearch={handleSearchGames} />}
        
    </section>
}
