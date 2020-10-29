function Vehicles(props) {
    return <ul>
        {props.items.map(item => <li key={item.url}>
            <img src= {item.thumbnail}/>
            <a href={item.thumbnail}><h2>{item.name}</h2></a>
        <p>{item.price}</p>
        </li>)}
    </ul>
}