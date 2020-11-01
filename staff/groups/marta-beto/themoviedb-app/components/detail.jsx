function Detail ({movie: {title, url, genre, date, like, description}}) {
    return <section className="detail">
        <h2 className="detail__title">{title}</h2>
        <img src={url} alt="" className="detail__img"/>
        <p className="detail__genre">{genre}</p>
        <p className="detail__date">{date}</p>
        <span className="detail__like">❤️♡</span>
        <p className="detail__description">{description}</p>
    </section>
    
}