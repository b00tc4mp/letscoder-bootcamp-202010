function Results(props) {
    return <section className="results">
        <ul className="results__list">
            {props.items.map(item => <li key={item.thumbnail}> 
                <h6 className="results__title">{item.name}</h6>
                <p className="results__content">{item.price}</p>
            </li>)}
        </ul>
    </section>
}