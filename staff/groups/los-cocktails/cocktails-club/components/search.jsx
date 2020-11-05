function Search({ onSearchByName, onSearchByIngredient, onSearchRandom }) {

    return <>
        <form className="search" onSubmit={function (event) {
            event.preventDefault()
            var form = event.target.closest('form')
            var query = form.input.value
            
            var buttons = form.getElementsByTagName('button')
            
            
            Array.prototype.forEach.call( buttons, button => addEventListener('click', event => {
                event.stopPropagation()
                // event.preventDefault()
                switch(button.value){
                    case 'Search By Name' : console.log(button.value)
                    break
                    case 'Search By Ingredient' : console.log(button.value)
                    break
                    case 'Search Random' : console.log(button.value)
                    break
                }
                // if(button.value === 'Search By Name') {
                //     // onSearchByName(query)
                    
                // } else if (button.value === 'Search By Ingredient') {
                //     // onSearchByIngredient(query)
                    
                // } else if (button.value === ) {
                //     // onSearchRandom(query)
                    
                // }
            }))

            

            

        }}>
            <input className="search__input" name="input" type="text" placeholder="Search" /><button   name="action" value="Search By Name" className="searchByName__button">Search By Name</button>
            <button  name="action" value="Search Random" className="searchRandom__button" >Search Random</button><button  name="action" value="Search By Ingredient" className="searchByIngredient__button">Search By Ingredient</button>
        </form>
    </>
}