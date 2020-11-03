function SearchByName({ onSearch }){

    return <>
<<<<<<< HEAD
    <form className="searchByName" onSubmit={function(event) {
=======
    <form className="searchByName" onSubmit={ function(event){
>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
        event.preventDefault()

        var query = event.target.input.value

        onSearch(query)
<<<<<<< HEAD

    }} >
     <input name="input" className="searchByName__input" type="text" placeholder="Search By Name"/> <button className="searchByName__button">🔍</button>
    </form>
     </>
=======
    }}>
    <input className="searchByName__input" name="input" type="text" placeholder="Search By name"/><button className="searchByName__button">🔍</button>
    </form>
    </>
>>>>>>> b9cb068fbe37e85b6b7932ead657f2e01b3779d2
}