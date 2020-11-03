function Card (props){
    console.log(props)
    return(
        <article class="card">
            <header class="card-header">
              <img
                class="card-header__image"
                src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`}
                height="120"
                alt="Api"
              />
            </header>
            <div class="card-body">
              <h4 class="card-body__title">
                {props.movie.original_title}
              </h4>
              <p class="card-body__description">
                {props.movie.overview}
              </p>
            </div>
          </article>
    )
}