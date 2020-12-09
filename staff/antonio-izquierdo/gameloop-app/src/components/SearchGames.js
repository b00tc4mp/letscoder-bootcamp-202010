import './SearchGames.sass'
import FindGames from './FindGames'
import { useState, useEffect } from 'react'
import { findGames, detailGame } from '../logic'
import DetailGame from './DetailGame'
import logo from "../assets/img/logo.png"


debugger
                //{ onSearch }
export default function () {
    const [view, setView] = useState('find-games')

    const [results, setResults] = useState()
    const [result, setResult] = useState()

    const handleSearchGames = event => {
        event.preventDefault()

        const { target: {
            query: { value: query },
            gameconsole: { value: gameconsole },
            budget: { value: budget },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        //onSearch(query, gameconsole, budget, priceMin, priceMax)

        try {
            findGames(query, gameconsole, budget, priceMin, priceMax, (error, games) => {

                if (error) return alert(error.message)

                setResults(games)
                setResult(null)

                setView('find-games')

            })
        } catch (error) {
            alert(error.message)
        }
    }
    //const { token } = sessionStorage

    //NO TOCAR ESTE MIERDÓN
    const handleDetailGame = id => {
        try {
            detailGame(id, (error, game) => {

                if (error) return alert(error.message)

                setResult(game)
                setResults(null)

            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
        <form onSubmit={handleSearchGames}>
        <input type="text" name="query" placeholder="name" />
        <input type="text" name="gameconsole" placeholder="console"/>
        <input type="text" name="budget" placeholder="budget"/>
        <input type="text" name="priceMin" placeholder="priceMin"/>
        <input type="text" name="priceMax" placeholder="priceMax"/>
        <button>Search</button>
        </form>

        {!result && results && results.length && <FindGames results={results} onDetailGame={handleDetailGame} />}
        {!results && <div><img className="results__li__logo" src={logo} /></div>}
        {!results && result && <DetailGame result={result} />}
        </>
    );
}