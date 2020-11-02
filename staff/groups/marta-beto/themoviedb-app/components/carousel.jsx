const Carousel = ({trending, onMovie}) => {
    return <div className="carousel">
        <h2 className="carousel__title">Trending Movies</h2>
        {trending.map(({poster_path: image, id: movieId}) => <div className="carousel__movie" onClick={() => onMovie(movieId)}>
        {image && <img src={image} />}
    </div>)}
</div>
}