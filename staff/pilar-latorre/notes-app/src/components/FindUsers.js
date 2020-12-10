//import './SearchUsers.sass'

function FindUsers( { onFind } ) {
    return <section className="findUsers">
        <h2 className='findUsers__h2'>FIND ALL USERS</h2>
        <form className='findUsers__form' onSubmit={event => {
            event.preventDefault()

            const { target: { query: { value: query } } } = event

            onFind(query)
        }}>
           
            <input className='findUsers__input' type="query" name="query" placeholder="insert your query" />
           
            
            <button className='findUsers__button'>SHOW USERS</button>
        </form>

    </section>
}

export default FindUsers