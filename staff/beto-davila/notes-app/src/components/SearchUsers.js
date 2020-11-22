
function SearchUsers ({ users, onSearch }) {
    
    const handleSearch = event => {
        event.preventDefault()

        const {target: {query: {value: query}}} = event
        
        onSearch(query)
    }

    return <section className="search">
        <form onSubmit={handleSearch}>
        <label htmlFor="search">Search users:</label>
        <input type="search" name="query" />
        <button className="search__btn">Search</button>
        </form>

        <section className="search__list">
            {users && users.length && <ul>
            {users.map(({ fullname, email, _id }) => <li key={_id} className="search__list-users">
                <p>{fullname}</p>
                <p>{email}</p>
                </li>)}
            </ul>}
        </section>
    </section>
}

export default SearchUsers;