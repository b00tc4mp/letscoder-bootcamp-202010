function Detail ({item: {id, title, image, genre, date, vote, overview, like}, onLike}) {
    const pathLocation = 'https://image.tmdb.org/t/p/w500';
    return <section className="detail">
        {title && <h2 className="detail__title">{title}</h2>}
        {image && <img src={pathLocation + image} alt="" className="detail__img"/>}
        <div className="detail__preoverview">
        {date && <p className="detail__date">{date}</p>}
        {genre && <p className="detail__genre">{genre}</p>}
        {vote && <p className="detail__vote">{vote}</p>}
        {<button className="detail__btn" onClick={event => {
                event.stopPropagation()

                onLike(id, image)
            }}>{like ? '❤️️' : '♡'}</button>}
        </div>
        {overview && <p className="detail__overview">{overview}</p>}
    </section>   
}