import './Home.sass'
import { useState, useEffect } from 'react'
import { retrieveUser, saveGame, findGames, saveGameImage, retrieveUserGames, modifyUser } from '../logic'
import Profile from './Profile'
import logo from "../assets/img/logo.png"
import SaveGame from './SaveGame'
import SearchGames from './SearchGames'
import { BsBoxArrowInLeft, BsPeopleCircle, BsHouseFill } from "react-icons/bs";
//import FindGames from './FindGames'

export default function Home({onLogout}) {

    const [name, setName] = useState()
    const [criteria, setCriteria] = useState()
    const [games, setGames] = useState()
    const [userGames, setUserGames] = useState()
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')
    const [error, setError] = useState(null)
    const [currentUser, setCurrentUser] = useState()

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
                const { fullname, contact, phone, city } = user
                setCurrentUser({fullname, contact, phone, city})
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

    const handleModifyUser = (fullname, contact, phone, city) => {

        try {
            const { token } = sessionStorage

            modifyUser(token, { fullname, contact, phone, city }, (error, changes) => {
                if (error) return feedbackError('could not find any changes')
                

                setCurrentUser({fullname, contact, phone, city})


            })
        } catch (error) {
            alert(error.message)
        }
    }
        
    return <section className="home">
        {/* <div className="home__container"> */}
        {token && <img className="home__logo" src={logo} onClick={ handleGoToHome }/>}
        <BsHouseFill className="home__button-menu" size= {42} onClick={ handleGoToHome } />
        {<BsBoxArrowInLeft className="home__button-logout" size= {40} onClick={() => {
            setName(null)
            setGames(null)
            setError(null)
            onLogout()
        } }/>}
        {view === 'home' && <BsPeopleCircle className="home__button-profile" size= {40} onClick={ handleGoToProfile } />}
        {view === 'profile' && <Profile name={name} currentUser={currentUser} onRetrieveUserGames={handleRetrieveUserGames} games={userGames} doRefreshGames={ handleRefreshGames } onModify={handleModifyUser}/>}
        {view === 'profile' && <SaveGame onSaveGame={handleSaveGame} error={error}  />}
        {view === 'home' && <SearchGames onSearch={handleSearchGames} />}
        <div className= "home__container">
            <div className= "home__container__menu"></div>
        </div>
    </section>
}
