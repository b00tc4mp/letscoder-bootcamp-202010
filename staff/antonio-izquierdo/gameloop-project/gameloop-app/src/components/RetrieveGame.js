import './RetrieveGame.sass'
import { useEffect, useState } from 'react'
import { retrieveGame, retrieveUser } from '../logic'

const API_URL = process.env.REACT_APP_API_URL

function RetrieveGame({ gameId }) {
    const [game, setGame] = useState()
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        try {
            retrieveGame(gameId, (error, game) => {
                console.log(gameId)

                if (error) return alert(error.message)

                setGame(game)
            })
            const { token } = sessionStorage

            retrieveUser(token, (error, user) => {

            if (error) return alert(error.message)

            const { fullname, contact, phone, city } = user

            setCurrentUser({fullname, contact, phone, city})
            
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return game ? <article className="result">
        <p className="result__li__title">game: {game.name}</p>
        <img className="result__li__img" src={`${API_URL}/games/${game.id}/images`} width="100px" />
        <p className="result__p">description: {game.description}</p>
        <p className="result__p">gameconsole: {game.gameconsole}</p>
        <p className="result__p">budget: {game.budget}</p>

        <p className="result__p">fullname: {currentUser.fullname}</p>
        <p className="result__p">phone: {currentUser.phone}</p>
        <p className="result__p">budget: {currentUser.contact}</p>
        <p className="result__p">city: {currentUser.city}</p>
        
    </article> : <> </>

}

export default RetrieveGame
