import './SearchGames.sass'
import FindGames from './FindGames'
import {useState, useEffect } from 'react'
import {findGames, detailGame} from '../logic'
import DetailGame from './DetailGame'
import logo from "../assets/img/logo.png"


function SearchGames(){
    const [view, setView] = useState('find-games')
    
    let query;
    const [results, setResults] = useState()
    const [result, setResult] = useState()

    const handleFindGames = (query, gameconsole, budget, priceMin, priceMax) => {
        //const { token } = sessionStorage

        try {
            findGames( query, gameconsole, budget, priceMin, priceMax, (error, games) => {

                if (error) return alert(error.message)

                setResults(games)
                setResult(null)

                setView('find-games')

            })
        } catch (error) {
            alert(error.message)
        }
    } 

    const handleDetailGame = id => {
        try {
            detailGame( id, (error, game) => {

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
                <form className="search" onSubmit={(event) => event.preventDefault()}>
                    <input
                        className="search__input"
                        name="query"
                        type="text"
                        placeholder="Search"
                        onChange={(event) => (query = event.target.value)}
                    />
    
                    <button
                        className="searchByName__button"
                        onClick={() => handleFindGames(query, undefined, undefined, undefined, undefined)}
                    >
                        Name
                </button>
                <button
                        className="searchByName__button"
                        onClick={() => handleFindGames( undefined, query, undefined, undefined, undefined)}
                    >
                        Console
                </button>
                {/* <button
                        className="searchByName__button"
                        onClick={() => handleFindGames( undefined, undefined, query, undefined, undefined)}
                    >
                        Price
                </button> */}

                <button
                        className="searchByName__button"
                        onClick={() => handleFindGames( undefined, undefined, undefined, query, undefined)}
                    >
                        PriceMin
                </button>

                <button
                        className="searchByName__button"
                        onClick={() => handleFindGames( undefined, undefined, undefined, undefined, query)}
                    >
                        PriceMax
                </button>

     
                </form>
                {!result && results && results.length && <FindGames results={results} onDetailGame={handleDetailGame} />}
                {!results && <div><img className="results__li__logo" src={ logo }/></div>}
                {!results && result && <DetailGame result={result}/>}
            </>
        );
    }


export default SearchGames