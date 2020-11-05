function Search({ onSearchByName, onSearchByIngredient, onSearchRandom }) {
    let query

    return <><form className="search" onSubmit={event => event.preventDefault()}>
        <input className="search__input" name="query" type="text" placeholder="Search" onChange={event => query = event.target.value} />

        <button onClick={() => onSearchByName(query)}>Name</button>
        <button onClick={() => onSearchRandom()}>Random</button>
        <button onClick={() => onSearchByIngredient(query)}>Ingredient</button>
    </form>
    </>
}