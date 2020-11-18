function Results(props) {
    return <ul>
        {props.items.map(item => <li key={item.url}>{item.title}<br/>{item.url}<br/>{item.preview}</li>)}
    </ul>
}