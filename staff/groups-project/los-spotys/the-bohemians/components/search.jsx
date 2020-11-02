function Search({ onSearch }) {
    return <form onSubmit={ function (event) {
        event.preventDefault()

        var query = event.target.query.value

        onSearch(query)
    }}>


    <label for = "music">Choose Track or Artist</label>
    <select name="music" id="music"> 

    <option value="Track">Track</option>
    <option value="Artist">Artist</option>

    </select>
    <input type="submit"/>
    <input type="text" name="artist" placeholder="Search" />
    <button type="reset">✖️</button>
    <button type="submit">Find</button>
</form>
}