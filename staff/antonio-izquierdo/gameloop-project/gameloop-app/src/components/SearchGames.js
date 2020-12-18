import './SearchGames.sass'
import FindGames from './FindGames'
import { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { findGames } from '../logic'
import RetrieveGame from './RetrieveGame'

export default withRouter(({ onSearch, history, location, match }) => {
    const [games, setGames] = useState()

    const handleFindGames = event => {
        event.preventDefault()

        const { target: {
            query: { value: query },
            gameconsole: { value: gameconsole },
            budget: { value: budget },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        onSearch(query || undefined, gameconsole || undefined, budget ? Number(budget) : undefined, priceMin ? Number(priceMin) : undefined, priceMax ? Number(priceMax) : undefined)

        try {
            findGames(query, gameconsole, budget, priceMin, priceMax, (error, games) => {

                if (error) return alert(error.message)

                setGames(games)
                history.push('/')

                //setView('find-games')

            })
        } catch (error) {
            alert(error.message)
        }
    }
    //const { token } = sessionStorage
    const handleRetrieveGame = gameId => {
        history.push(`/game/${gameId}`)
        console.log(gameId)
    }


    return (
        <> <div class="box">
                <div class="container">
                    <form className="search-games" onSubmit={handleFindGames}>
                        <input className="search-games__input" type="search" id="search" name="query" placeholder="name" />
                        <input className="search-games__input" type="search" id="search" name="gameconsole" placeholder="console" />
                        <input className="search-games__input" type="search" id="search" name="budget" placeholder="budget" />
                        <input className="search-games__input" type="search" id="search" name="priceMin" placeholder="priceMin" />
                        <input className="search-games__input" type="search" id="search" name="priceMax" placeholder="priceMax" />
                        <button>Search</button>
                    </form>
                </div>
                <span class="icon"><i class="fa fa-search"></i></span>
            </div>


            { games && games.length > 0 && <FindGames onSearch={handleFindGames} games={games} onRetrieveGame={handleRetrieveGame} />}
        </>
    );
})