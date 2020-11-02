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
    <label htmlFor="query" className="search__label">Movie title</label>
    <input className="search__title" type="text" name="query" placeholder="Search your title"/>
    <button className="search__btn">Search</button>
</form>
}