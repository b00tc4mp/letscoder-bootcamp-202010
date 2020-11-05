const Search = ({ onSearch }) => {
    return <form className="search" onSubmit={(event) => {
        event.preventDefault();

        const {target: {query: {value: query}}} = event

        try {
            onSearch(query)
        } catch (error) {
            alert(error.message);
        }
    }
    }>
    <input className="search__title" type="text" name="query" placeholder="Title...."/>
    <button className="search__btn btn">Search</button>
</form>
}