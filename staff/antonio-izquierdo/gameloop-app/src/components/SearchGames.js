import './SearchGames.sass'
import FindGames from './FindGames'
import { useState, useEffect } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { findGames, retrieveGame } from '../logic'
import DetailGame from './DetailGame'

debugger
//{ onSearch }
export default withRouter(function ({ onSearch, history }) {
    const [view, setView] = useState('find-games')
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

                setView('find-games')

            })
        } catch (error) {
            alert(error.message)
        }
    }
    //const { token } = sessionStorage

    const handleDetailGame = gameId => {
        history.push(`/games/${gameId}`)
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

            { games && games.length > 0 && <FindGames onSearch={handleFindGames} games={games} onDetailGame={handleDetailGame} />}
            <Route path='/games/:gameId' render={props => <DetailGame gameId={props.match.params.gameId} />} />
        </>
    );
})