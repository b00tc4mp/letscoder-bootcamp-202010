function Detail({ item: { title, year, url, preview, image, price, like, id}, onLike, currency}) {
    const _title = <h2>{title} {`${year? `(${year})`: ''}`}</h2>

    return <section className="detail">
        {url? <a href={url}>{_title}</a> : {_title}}
        {preview && <p>{preview}</p> }
        {image && <img src={image} />}
        {price && <span>{price} {currency}</span>}
        {<button onClick={event => {
                event.stopPropagation()

                onLike(id)
            }}>{like ? '❤️' : '♡' }</button>}
    </section>
}