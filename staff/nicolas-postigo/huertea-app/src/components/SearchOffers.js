import { useState } from 'react'
import {findOffer} from '../logic'
import './FindOffer'
import FindOffer from './FindOffer'

function SearchOffers(){

    let query;
    const [results, setResults] = useState()

    const handleFindOffers = (titleoffer, offername, price) => {


        try {
            findOffer( titleoffer, offername, price, (error, offers) => {

                if (error) return alert(error.message)

                setResults(offers)

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
                        onClick={() => handleFindOffers(query, undefined, undefined)}
                    >
                        titleoffer
                </button>
                <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers( undefined, query, undefined)}
                    >
                        offername
                </button>
                <button
                        className="searchByName__button"
                        onClick={() => handleFindOffers( undefined, undefined, query)}
                    >
                        price
                </button>

     
                </form>
                
                {results && results.length && <FindOffer results={results} />}
            </>
        );
    }


export default SearchOffers