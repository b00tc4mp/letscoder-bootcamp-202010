function SearchByName({ onSearch }){

    return <>
    <form className="searchByName" onSubmit={function(event) {
        event.preventDefault()

        var query = event.target.input.value

        onSearch(query)

    }} >
     <input name="input" className="searchByName__input" type="text" placeholder="Search By Name"/> <button className="searchByName__button">🔍</button>
    </form>
     </>
}