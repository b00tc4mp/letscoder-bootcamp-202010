import './SearchGames.sass'
import GameResults from './GameResults'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { findGames } from '../logic'


export default withRouter(({ history }) => {
    const [games, setGames] = useState()
    const [error, setError] = useState(null)

    function feedbackError(error) {
        setError(error)
        setTimeout(() => {
            setError(null)
        }, 8000)
    }

    const handleFindGames = event => {
        event.preventDefault()

        const { target: {
            query: { value: query },
            gameconsole: { value: gameconsole },
            budget: { value: budget },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        try {
            findGames(query || undefined, gameconsole || undefined, budget ? Number(budget) : undefined, priceMin ? Number(priceMin) : undefined, priceMax ? Number(priceMax) : undefined, (error, games) => {
                
                if (error) return feedbackError(error.message)

                setGames(games)
                history.push('/')
            })
        } catch (error) {
            feedbackError(error.message)
        }
    }
    const handleRetrieveGame = gameId => {
        history.push(`/game/${gameId}`)
    }


    return (
        <> <div className="box">
                <div class="container">
                    <form className="search-games" onSubmit={handleFindGames}>
                        <input className="search-games__input" type="text" id="text" name="query" placeholder="name" />
                        <input className="search-games__input" type="text" id="text" name="gameconsole" placeholder="console" />
                        <input className="search-games__input" type="number" id="number" name="budget" placeholder="budget" />
                        <input className="search-games__input" type="number" id="number" name="priceMin" placeholder="priceMin" />
                        <input className="search-games__input" type="number" id="number" name="priceMax" placeholder="priceMax" />
                        <button className="search-games__button">SEARCH</button>
                    </form>
                </div>
                <span className="icon"><i className="fa fa-search"></i></span>
            </div>


            { games && games.length > 0 && <GameResults games={games} onRetrieveGame={handleRetrieveGame} />}
        </>
    );
})