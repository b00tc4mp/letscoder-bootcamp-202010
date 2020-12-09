import './MainSearch.sass'

export default function({onSearch}) {
    const handleSearch = event => {
        event.preventDefault()

        const { target: { queryShelter: { value: queryShelter },
            city: { value: city },
            queryPet: { value: queryPet },
            species: {value: species},
            breed: {value: breed}

        }} = event

        onSearch(queryShelter, city, queryPet, species, breed)
    }

    return <>
    <form onSubmit={handleSearch}>
        <input type="text" name="queryShelter" placeholder="shelter info" />
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="queryPet" placeholder="pet info" />
        <input type="text" name="species" placeholder="dog or cat" />
        <input type="text" name="breed" placeholder="breed" />
        <button>Search</button>
    </form>

</>
}