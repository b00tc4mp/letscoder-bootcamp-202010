function Detail ({movie: {title, url, genre, date, like, description}}) {
    return <section className="detail">
        {title && <h2 className="detail__title">{title}</h2>}
        {url && <img src={url} alt="" className="detail__img"/>}
        {genre && <p className="detail__genre">{genre}</p>}
        {date && <p className="detail__date">{date}</p>}
        {<button onClick={event => {
                event.stopPropagation()

                onLike(id)
            }}>{like ? '❤️' : '♡'}</button>}
        {description && <p className="detail__description">{description}</p>}
    </section>   
}