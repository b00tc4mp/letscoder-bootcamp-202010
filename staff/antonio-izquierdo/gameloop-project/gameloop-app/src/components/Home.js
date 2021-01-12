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
    const [userGames, setUserGames] = useState()
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'access')
    const [feedback, setFeedback] = useState(null)
    const [currentUser, setCurrentUser] = useState()

    function showFeedback(error) {
        setFeedback(error)
        setTimeout(() => {
            setFeedback(null)
        }, 8000)
    }

    const { token } = sessionStorage

    useEffect(() => {
        const { token } = sessionStorage
        try {
            retrieveUser(token, (error, user) => {
                if (error) return showFeedback(error.message)
                const { fullname, contact, phone, city } = user
                setCurrentUser({fullname, contact, phone, city})
                setName(fullname)

            })
        } catch (error) {
            showFeedback(error.message)
        }
    }, [])

    const handleSaveGame = (name, description, gameconsole, budget, image) => {

        const { token } = sessionStorage
        try {
            saveGame(token, undefined, name, description, gameconsole, budget, (error, gameId) => {
                if (error) return showFeedback(error.message)

                saveGameImage(token, gameId, image, error => {
                    if (error) return showFeedback(error.message)
                    try {
                        showFeedback('game saved')
                    } catch (error) {
                        return showFeedback(error.message)
                    }
                })
            })
        } catch (error) {
            return showFeedback(error.message)
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
                if (error) return showFeedback(error.message)
                setUserGames(games)
            }) 
        } catch (error) {
            showFeedback(error.message)   
        }
    }

    const handleRefreshGames = () => {
        try {
            retrieveUserGames(token, (error, games) => {

                if (error) return showFeedback(error.message)

                setUserGames(games)
            })
        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleModifyUser = (fullname, contact, phone, city) => {
        try {
            const { token } = sessionStorage

            modifyUser(token, { fullname, contact, phone, city }, (error, changes) => {
                if (error) return showFeedback('could not find any changes')
                
                setCurrentUser({fullname, contact, phone, city})


            })
        } catch (error) {
            showFeedback(error.message)
        }
    }
        
    return <section className="home">
        {/* <div className="home__container"> */}
        {token && <img className="home__logo" src={logo} onClick={ handleGoToHome }/>}
        <BsHouseFill className="home__button-menu" size= {42} onClick={ handleGoToHome } />
        {<BsBoxArrowInLeft className="home__button-logout" size= {40} onClick={() => {
            setName(null)
            setFeedback(null)
            onLogout()
        } }/>}
        {view === 'home' && <BsPeopleCircle className="home__button-profile" size= {40} onClick={ handleGoToProfile } />}
        {view === 'profile' && <Profile name={name} currentUser={currentUser} onRetrieveUserGames={handleRetrieveUserGames} games={userGames} doRefreshGames={ handleRefreshGames } onModify={handleModifyUser}/>}
        {view === 'profile' && <SaveGame onSaveGame={handleSaveGame} error={feedback}  />}
        {view === 'home' && <SearchGames />}
        <div className= "home__container">
            <div className= "home__container__menu"></div>
        </div>
    </section>
}
