import './SearchPets.sass'
import FindPets from './FindPets'
import { useState } from 'react'
import {findPets} from '../logic'

function SearchPets(){

    let query;
    const [results, setResults] = useState()

    const handleFindPets = (queryShelter, city, queryPet, species, breed) => {
        const { token } = sessionStorage

        try {
            findPets( token, queryShelter, city, queryPet, species, breed, (error, pets) => {

                if (error) return alert(error.message)

                setResults(pets)

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
                        className="searchByName__button1"
                        onClick={() => handleFindPets(query, undefined, undefined, undefined, undefined)}
                    >
                        SHELTER
                </button>
                <button
                        className="searchByName__button1"
                        onClick={() => handleFindPets( undefined, query, undefined, undefined, undefined)}
                    >
                        CITY
                </button>
                <button
                        className="searchByName__button"
                        onClick={() => handleFindPets( undefined, undefined, query, undefined, undefined)}
                    >
                        PET
                </button>

                <button
                        className="searchByName__button"
                        onClick={() => handleFindPets( undefined, undefined, undefined, query, undefined)}
                    >
                        SPECIES
                </button>

                <button
                        className="searchByName__button"
                        onClick={() => handleFindPets( undefined, undefined, undefined, undefined, query)}
                    >
                        BREED
                </button>

     
                </form>
                {results && results.length && <FindPets results={results} />}
            </>
        );
    }


export default SearchPets
