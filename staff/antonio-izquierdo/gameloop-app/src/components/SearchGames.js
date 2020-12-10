import './SearchGames.sass'
import FindGames from './FindGames'
import { useState, useEffect } from 'react'
import { findGames, detailGame } from '../logic'
import DetailGame from './DetailGame'
import logo from "../assets/img/logo.png"

debugger
                //{ onSearch }
export default function ({ onSearch }) {
    const [view, setView] = useState('find-games')

    const [results, setResults] = useState()
    const [result, setResult] = useState()

    const handleFindGames = event => {
        event.preventDefault()

        const { target: {
            query: { value: query },
            gameconsole: { value: gameconsole },
            budget: { value: budget },
            priceMin: { value: priceMin },
            priceMax: { value: priceMax }
        } } = event

        onSearch(query || undefined, gameconsole || undefined, budget? Number(budget) : undefined, priceMin? Number(priceMin) : undefined, priceMax? Number(priceMax) : undefined)

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
        <form onSubmit={handleFindGames}>
        <input type="text" name="query" placeholder="name" />
        <input type="text" name="gameconsole" placeholder="console"/>
        <input type="number" name="budget" placeholder="budget"/>
        <input type="number" name="priceMin" placeholder="priceMin"/>
        <input type="number" name="priceMax" placeholder="priceMax"/>
        <button>Search</button>
        </form>

        {!result && results && results.length > 0 && <FindGames onSearch={handleFindGames} results={results} onDetailGame={handleDetailGame} />}
        {!results && <div><img className="results__li__logo" src={logo} /></div>}
        {!results && result && <DetailGame result={result} />}
        </>
    );
}