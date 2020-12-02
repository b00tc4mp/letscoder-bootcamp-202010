import './SearchNotes.sass'

export default function ({ onSearchNote }) {
    const handleSubmit = event => {
        event.preventDefault()

        const { target: {
            user: { value: user},
            searchNote:{value : search},
            tags: { value: tags }
        } } = event

        onSearchNote(user, search,  tags.split(' '))
    }

    return <section className = "search-note" >
        <form onSubmit={handleSubmit}>
        <input type="radio" id="user" name="search" value="user" defaultChecked />
            <label htmlFor="user">user</label>
            <input type="radio" id="tags" name="search" value="tags" />
            <label htmlFor="tags">tags</label>
            <input type="query" name="searchNote" />
            <button>Search</button>
            
        </form>
    </section>
} 