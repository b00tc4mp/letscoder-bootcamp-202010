import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame, findGames, saveGameImage, retrieveUserGames } from '../logic'
import Profile from './Profile'
import logo from "../assets/img/logo.png"
import SaveGame from './SaveGame'
import SearchGames from './SearchGames'
//import FindGames from './FindGames'

export default function Home({onLogout}) {

    const [name, setName] = useState()
    const [criteria, setCriteria] = useState()
    const [games, setGames] = useState()
    const [userGames, setUserGames] = useState()
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')
    const [error, setError] = useState(null)

    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 8000)
    }

    const { token } = sessionStorage

    useEffect(() => {
        //const { token } = sessionStorage
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

        //const { token } = sessionStorage
        try {
            saveGame(undefined, name, description, gameconsole, budget, token, (error, gameId) => {
                if (error) return feedbackError(error.message)

                saveGameImage(gameId, image, error => {
                    if (error) return feedbackError(error.message)
                    try {
                        alert('game saved')
                    } catch (error) {
                        return feedbackError(error.message)
                    }
                })
            })
        } catch (error) {
            return feedbackError(error.message)
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

    const handleGoToProfile = () => {
        setView('profile')
    }
    
    const handleGoToHome = () => {
        setView('home')
    }

   
    const handleRetrieveUserGames = () => {
        try {
            debugger
            retrieveUserGames(token, (error, games)=> {
                if (error) return alert(error.message)
                setUserGames(games)
            }) 
        } catch (error) {
         alert(error.message)   
        }
    }

    const handleRefreshGames = () => {
        try {
            retrieveUserGames(token, (error, games) => {

                if (error) return alert(error.message)

                setUserGames(games)
            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <section className="home">
        {token && <img className="sign-in__logo" src={logo} />} 
        {<h1>Welcome to Gameloop!</h1>}
        {<button className="home__logout" onClick={() => {
            setName(null)
            setGames(null)
            setError(null)
            onLogout()
        } }>LOGOUT</button>}
        {view === 'home' && <button className="home__profile" onClick={handleGoToProfile}>PROFILE</button>}
        {view === 'profile' && <button className="home__profile" onClick={handleGoToHome}>HOME</button>}
        {view === 'profile' && <SaveGame onSaveGame={handleSaveGame} error={error}  />}
        {view === 'home' && <SearchGames onSearch={handleSearchGames}/>}
        {view === 'profile' && <Profile name={name} onRetrieveUserGames={handleRetrieveUserGames} games={userGames} doRefreshGames={ handleRefreshGames }/>}
    </section>
}
