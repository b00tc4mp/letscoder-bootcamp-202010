function SearchByIngredient({ onSearch }){
    return <>
        <form className="searchByIngredient" onSubmit={function(event) {
            event.preventDefault()
            var query = event.target.input.value

            onSearch(query)
        }} >
            <input className="searchByIngredient__input" name="input" type="text" placeholder="Search by ingredient" /><button className="searchByIngredient__button" >🔍</button>
        </form>
    
    
    </>
}