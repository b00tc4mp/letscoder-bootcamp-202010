// Component that displays the passed items on an 'ul' element

// Array map method returns each passed item on its respective 'li' element

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