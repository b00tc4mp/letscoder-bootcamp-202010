function Search({ onSearch }) {
    return <form className = "searchTrack" onSubmit={ function (event) {
        event.preventDefault()

        const type = 'track'

        var query = event.target.query.value

        onSearch(type,query)
    }}>


    <input type="text" name="query" placeholder="Search" />
    <button className = "button button__reset" type="reset">Reset</button>
    <button className = "button button__find" type="submit">Find</button>
</form>
}