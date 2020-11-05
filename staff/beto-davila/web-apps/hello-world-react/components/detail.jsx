// Displays a selected item (onclick) that comes from 'Results' compo.
 
function Detail({ item: { id, title, year, url, preview, image, price, like }, currency, onLike }) {
    const _title = <h2>{title} {`${year? `(${year})`: ''}`}</h2>

    return <section className="detail">
        {url ? <a href={url}>{_title}</a> : <h2>{_title}</h2>}
        {preview && <p>{preview}</p>}
        {image && <img src={image} />}
        {price && <span>{price} {currency}</span>}
        {<button onClick={event => {
                event.stopPropagation()
                
                onLike(id)
            }}>{like ? '❤️' : '♡'}</button>}
    </section>
}