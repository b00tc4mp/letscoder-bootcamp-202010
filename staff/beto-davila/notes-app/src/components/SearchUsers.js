const SearchUsers = ({ users, onSearch }) => {
    
    const handleSearch = event => {
        event.preventDefault()

        const {target: {query: {value: query}}} = event
        
        onSearch(query)
    }

    return <>
            <form onSubmit={handleSearch}>
            <label htmlFor="search">Search users:</label>
            <input type="search" name="query" />
            <button className="search__btn">Search</button>
            </form>

            <section className="search">
                {users && users.length && <ul>
                {users.map(({ fullname, email, _id }) => <li key={_id} className="search-users">
                    <p>{fullname}</p>
                    <p>{email}</p>
                    </li>)}
                </ul>}
            </section>
    </>
}

export default SearchUsers;