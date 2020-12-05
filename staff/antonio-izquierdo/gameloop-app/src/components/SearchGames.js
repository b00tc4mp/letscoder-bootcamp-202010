import FindGames from './FindGames'
import { useState } from 'react'
import {FindGames} from '../logic'

function SearchGames(){

    let query;
    const [results, setResults] = useState()

    const handleFindGames = (query, gameconsole, budget, priceMin, priceMax) => {
        //const { token } = sessionStorage

        try {
            FindGames( query, gameconsole, budget, priceMin, priceMax, (error, games) => {

                if (error) return alert(error.message)
                setResults(games)

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
                <button
                        className="searchByName__button"
                        onClick={() => handleFindGames( undefined, undefined, query, undefined, undefined)}
                    >
                        Price
                </button>

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
                {results && results.length && <Games results={results} />}
            </>
        );
    }


export default SearchGames