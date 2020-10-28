function VehiclesResults(props) {
    return <ul>
        {props.items.map(item => <li key={item.url}>
            <a href={item.thumbnail}><h2>{item.name}</h2></a>
        <p>{item.id}</p><p>{item.price}</p>
        </li>)}
    </ul>
}