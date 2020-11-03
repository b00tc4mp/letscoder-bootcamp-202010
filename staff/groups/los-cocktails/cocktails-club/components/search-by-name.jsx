function SearchByName({ onSearch }){

    return <>
    <form className="searchByName" onSubmit={ function(event){
        event.preventDefault()

        var query = event.target.input.value

        onSearch(query)
    }}>
    <input className="searchByName__input" name="input" type="text" placeholder="Search By name"/><button className="searchByName__button">🔍</button>
    </form>
    </>
}