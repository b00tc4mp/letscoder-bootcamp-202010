function Results(props) {
    return <ul>
        {props.items.map(item => <li key={item.url}>
            <a href={item.url}><h2>{item.title}</h2></a>
            <p>{item.preview}</p>
        </li>)}
    </ul>
}