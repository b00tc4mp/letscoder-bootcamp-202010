import './SearchNotes.sass'

export default function({onSearch}) {
    const handleSearch = event => {
        event.preventDefault()

        const { target: { 
            query: { value: query },
            tags: { value: tags },
            visibility: { value: visibility }
        }} = event

        onSearch(query, tags, visibility)
    }

    return <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="query" />
        <input type="text" name="tags" placeholder="tags" />
        <input type="radio" name="visibility" value="private" />
        <input type="radio" name="visibility" value="public" />
        <button>Search</button>
    </form>
}