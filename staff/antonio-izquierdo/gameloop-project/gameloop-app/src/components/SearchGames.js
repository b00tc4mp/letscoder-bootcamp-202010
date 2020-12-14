import './SearchGames.sass'
import FindGames from './FindGames'
import { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { findGames } from '../logic'
import RetrieveGame from './RetrieveGame'

 
//{ onSearch }
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
debugger
    const handleRetrieveGame = gameId => {
        history.push(`/game/${gameId}`)
        console.log(gameId)
        setGames(undefined)
    }


    return (
        <>
            <form onSubmit={handleFindGames}>
                <input type="text" name="query" placeholder="name" />
                <input type="text" name="gameconsole" placeholder="console" />
                <input type="number" name="budget" placeholder="budget" />
                <input type="number" name="priceMin" placeholder="priceMin" />
                <input type="number" name="priceMax" placeholder="priceMax" />
                <button>Search</button>
            </form>

            { games && games.length > 0 && <FindGames onSearch={handleFindGames} games={games} onRetrieveGame={handleRetrieveGame} />}
        </>
    );
})