function Detail ({item: {id, title, image, genreIds, date, overview}, like, onLike}) {
    const pathLocation = 'https://image.tmdb.org/t/p/w500';
    return <section className="detail">
        {title && <h2 className="detail__title">{title}</h2>}
        {image && <img src={pathLocation + image} alt="movie-img" className="detail__img"/>}
        {genreIds && <p className="detail__genre">{genreIds}</p>}
        {date && <p className="detail__date">{date}</p>}
        {<button onClick={event => {
                event.stopPropagation()

                onLike(id)
            }}>{like ? '❤️' : '♡'}</button>}
        {overview && <p className="detail__overview">{overview}</p>}
    </section>   
}