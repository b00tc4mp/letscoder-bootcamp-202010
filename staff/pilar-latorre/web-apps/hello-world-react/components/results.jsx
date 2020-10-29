function Results({ items, currency, onItem }) {
    return <ul className="results">
        {items.map(({ id, title, url, preview, image, price }) => <li className="results__item" key={id} onClick={() => onItem(id)}>
            {url ? <a href={url}><h2>{title}</h2></a> : <h2>{title}</h2>}
            {preview && <p>{preview}</p>}
            {image && <img src={image} />}
            {price && <span>{price} {currency}</span>}
            
        </li>)}
    </ul>
}