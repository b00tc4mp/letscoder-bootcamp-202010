function Results(props) {
    return <ul>
        {props.items.map(item => <li key={item.url}>
            {item.url ? <a href={item.url}><h2>{item.title}</h2></a> : <h2>{item.title}</h2>}
            {item.preview && <p>{item.preview}</p>}
            {item.image && <img src={item.image} />}
        </li>)}
    </ul>
} 