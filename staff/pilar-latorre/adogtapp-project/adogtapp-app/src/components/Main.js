
//import './Main.sass'

//import FindPets from './FindPets'
import { useState } from 'react'
import {findPets, detailPet} from '../logic'
//import DetailPet from './DetailPet'


function Main(){

    let query;
    const [results, setResults] = useState()
    const [result, setResult] = useState()

    const handleFindPets = (queryShelter, city, queryPet, species, breed) => {
        const { token } = sessionStorage

        try {
            findPets( token, queryShelter, city, queryPet, species, breed, (error, pets) => {

                if (error) return alert(error.message)

                setResults(pets)
                setResult(null)

            })
        } catch (error) {
            alert(error.message)
        }
    } 
    
    const handleDetailPet = id => {
        try {
            detailPet( id, (error, pet) => {

                if (error) return alert(error.message)

                setResult(pet)
                setResults(null)

            })
        } catch (error) {
            alert(error.message)
        }

    }
    
    return <>

        <h1>Welcome to ADOGTAPP!!  </h1>
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
                        onClick={() => handleFindPets(query, undefined, undefined, undefined, undefined)}
                    >
                        SHELTER
                </button>
                <button
                        className="searchByName__button"
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
    </>

}

export default Main