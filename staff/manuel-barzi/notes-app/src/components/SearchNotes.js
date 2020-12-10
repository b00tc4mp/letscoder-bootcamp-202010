import './SearchNotes.sass'

export default function ({ onSearch }) {
    const handleSearch = event => {
        event.preventDefault()

        const { target: {
            query: { value: query },
            tags: { value: tags },
            visibility: { value: visibility },
            fromYear: { value: fromYear },
            toYear: { value: toYear }
        } } = event

        

        onSearch(query || undefined, tags && tags.split(' ') || undefined, visibility || undefined, fromYear? Number(fromYear) : undefined, toYear? Number(toYear) : undefined)
    }

    return <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="query" />
        <input type="text" name="tags" placeholder="tags" />
        <input type="radio" name="visibility" value="private" />
        <input type="radio" name="visibility" value="public" />
        <input type="number" name="fromYear" />
        <input type="number" name="toYear" />
        <button>Search</button>
    </form>
}