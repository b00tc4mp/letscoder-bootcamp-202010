const Carousel = ({title, movies, onMovie}) => {
    return <div className="carousel">
        <h2 className="carousel__title">{title}</h2>
        {movies.map(({id, image}) => <div className="carousel__movie" key={id} onClick={() => onMovie(id)}>
        <img src={image} alt="movie-img"/>
    </div>)}
</div>
}