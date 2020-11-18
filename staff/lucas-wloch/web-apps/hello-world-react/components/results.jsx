function Results({ items, currency, onItem, onLike }) {
    return <ul className="results">
        {items.map(({ id, title, url, preview, image, price, like }) => <li className="results__item" key={id} onClick={() => onItem(id)}>
            {url ? <a href={url}><h2>{title}</h2></a> : <h2>{title}</h2>}
            {preview && <p>{preview}</p>}
            {image && <img src={image} />}
            {price && <span>{price} {currency}</span>}
            {<button onClick={event => {
                event.stopPropagation()

                onLike(id)
            }}>{like ? '❤️' : '♡' }</button>}
        </li>)}
    </ul>
}