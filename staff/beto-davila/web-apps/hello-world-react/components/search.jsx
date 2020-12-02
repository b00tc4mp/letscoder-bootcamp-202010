// Component with a search bar that gets an input to use it on a callback

function Search({ onSearch }) {
    return <form onSubmit={function(e) {
        e.preventDefault(); // preventing submit default behavior (submitting the input and send it)
        var query = e.target.query.value;

        onSearch(query); // passing the input to the callback
    }}>
        <input type="text" name="query" required/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
}