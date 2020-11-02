function Search({ onSearch }) {
    return <form onSubmit={ function (event) {
        event.preventDefault()

        var query = event.target.query.value

        onSearch(query)
    }}>

    <input type="text" name="artist" placeholder="Search by Artist" />
    <input type="text" name="tracks" placeholder="Search by tracks" />
    <button type="reset">✖️</button>
    <button type="submit">Find</button>
</form>
}