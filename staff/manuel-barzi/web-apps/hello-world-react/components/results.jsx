function Results({ items }) {
    return <ul>
        {items.map(({ title, url, preview, image }) => <li key={url}>
            {url ? <a href={url}><h2>{title}</h2></a> : <h2>{title}</h2>}
            {preview && <p>{preview}</p>}
            {image && <img src={image} />}
        </li>)}
    </ul>
}