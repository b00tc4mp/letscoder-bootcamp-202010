// Component that displays the passed items on an 'ul' element
// Array map method returns each passed item (properties) on its respective 'li' element
// Triggers a click event passing the id property to the callback 'onItem'

function Results({ items, currency, onItem, onLike }) {
    return <ul className="results">
        {items.map(({ id, title, url, preview, image, price, like }) => <li className="results__item" key={id} onClick={() => onItem(id)}>
            {url ? <a href={url}><h2>{title}</h2></a> : <h2>{title}</h2>}
            {preview && <p>{preview}</p>}
            {image && <img src={image} />}
            {price && <span>{price} {currency}</span>}
            {<button onClick={event => {
                event.stopPropagation() // prevents bubbling on clicking the element all the way up to its parent 'li'
                
                onLike(id)
            }}>{like ? '❤️' : '♡'}</button>} 
        </li>)}
    </ul>
}