import './SearchGames.sass'
import FindGames from './FindGames'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { findGames } from '../logic'


export default withRouter(({ onSearch, history }) => {
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
        <> <div className="box">
                <div class="container">
                    <form className="search-games" onSubmit={handleFindGames}>
                        <input className="search-games__input" type="search" id="text" name="query" placeholder="name" />
                        <input className="search-games__input" type="search" id="text" name="gameconsole" placeholder="console" />
                        <input className="search-games__input" type="search" id="number" name="budget" placeholder="budget" />
                        <input className="search-games__input" type="search" id="number" name="priceMin" placeholder="priceMin" />
                        <input className="search-games__input" type="search" id="number" name="priceMax" placeholder="priceMax" />
                        <button className="search-games__button">SEARCH</button>
                    </form>
                </div>
                <span className="icon"><i className="fa fa-search"></i></span>
            </div>


            { games && games.length > 0 && <FindGames onSearch={handleFindGames} games={games} onRetrieveGame={handleRetrieveGame} />}
        </>
    );
})