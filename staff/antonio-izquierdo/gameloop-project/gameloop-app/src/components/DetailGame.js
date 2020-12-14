//import './DetailGame.sass'
import { useEffect, useState } from 'react'
import { retrieveGame } from '../logic'

const API_URL = process.env.REACT_APP_API_URL

function DetailGame({ gameId }) {
    const [game, setGame] = useState()
    useEffect(() => {
        try {
            retrieveGame(gameId, (error, game) => {

                if (error) return alert(error.message)

                setGame(game)


            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return game ? <article className="result">
        <img className="results__li__img" src={`${API_URL}/games/${game.id}/images`} width="500px" />
        <p className="result__p">game: {game.name}</p>
        <p className="result__p">description: {game.description}</p>
        <p className="result__p">gameconsole: {game.gameconsole}</p>
        <p className="result__p">budget: {game.budget}</p>
    </article> : <> </>

}

export default DetailGame
