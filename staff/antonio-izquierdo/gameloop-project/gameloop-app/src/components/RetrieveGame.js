import './RetrieveGame.sass'
import { useEffect, useState } from 'react'
import { retrieveGame } from '../logic'

const API_URL = process.env.REACT_APP_API_URL

function RetrieveGame({ gameId }) {
    const [game, setGame] = useState()
    useEffect(() => {
        try {
            debugger
            retrieveGame(gameId, (error, game) => {
                console.log(gameId)

                if (error) return alert(error.message)

                setGame(game)


            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return game ? <article className="result">
        <p className="result__li__title">game: {game.name}</p>
        <img className="result__li__img" src={`${API_URL}/games/${game.id}/images`} width="500px" />
        <p className="result__p">description: {game.description}</p>
        <p className="result__p">gameconsole: {game.gameconsole}</p>
        <p className="result__p">budget: {game.budget}</p>
    </article> : <> </>

}

export default RetrieveGame
