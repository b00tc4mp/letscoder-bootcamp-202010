function Search({ onSearch }) {
    return <form className = "searchTrack" onSubmit={ function (event) {
        event.preventDefault()

        const type = 'track'

        var query = event.target.query.value

        onSearch(type,query)
    }}>


    <input type="text" name="query" placeholder="Search" />
    <button className = "button" type="reset">✖️</button>
    <button className = "button" type="submit">Find</button>
</form>
}