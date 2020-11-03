
function Slider(props) {

  let posters = props && props.items && props.items.results && props.items.results.map(({ poster_path: image }) => {
    return { image };
  });

  return (

    <div className="u-box">
      <h1>{props.title}</h1>
      <div className="scrollable-carousel">


        {posters && posters.map(poster => {
          return <div className="scrollable-carousel__item">
            <img 
              src={`https://image.tmdb.org/t/p/w185/${poster.image}`}></img>
          </div>
        })}
      </div>
    </div>
  )
}