import './SearchPets.sass'
import PetResults from './PetResults'
import { useState } from 'react'
import {findPets, detailPet} from '../logic'
import DetailPet from './DetailPet'



function SearchPets(){
    const [results, setResults] = useState()
    const [result, setResult] = useState()
    const [criteria, setCriteria] = useState()

    const { token } = sessionStorage
    const handleResults = event => {
        event.preventDefault()

        const {target: {
            queryPet : { value: queryPet},
            species: {value: species},
            breed: { value: breed}

        }} = event

        if (event.target.queryShelter) {
            var queryShelter = event.target.queryShelter.value;
          }

        if (event.target.city) {
            var city = event.target.city.value;
        }

        handleSearchPets(queryShelter, city, queryPet, species, breed)
    } 
    
    const handleRefreshResults = () => {
        const {queryShelter, city, queryPet, species, breed} = criteria

        handleSearchPets(queryShelter, city, queryPet, species, breed)
    }

    const handleSearchPets = (queryShelter, city, queryPet, species, breed) => {
        try {
            findPets( token, queryShelter, city, queryPet, species, breed, (error, pets) => {
                if (error) return alert(error.message)

                setCriteria({queryShelter, city, queryPet, species, breed})
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
        return (
            <>
        {!token && <h1>Welcome to ADOGTAPP, here you can search</h1>}
        <form className="search" onSubmit={handleResults}>
            {!token && <input className="search__input" type="text" name="queryShelter" placeholder="shelter info" />}
            {!token && <input className="search__input" type="text" name="city" placeholder="city"/>}
            <input className="search__input" type="text" name="queryPet" placeholder="queryPet"/>
            <input className="search__input" type="text" name="species" placeholder="species"/>
            <input className="search__input" type="text" name="breed" placeholder="breed"/>
            <button className="search__button">Search</button>
        </form>
   
        {!result && results && results.length>0 && <PetResults results={results} onDetailPet={handleDetailPet} />}
        {!results && !result && <div><img className="search__img"src="patitas.jpg"/></div>}
        {!results && result && <DetailPet result={result} onDeletePet = {handleRefreshResults}/>}
            </>
        );
    }


export default SearchPets
