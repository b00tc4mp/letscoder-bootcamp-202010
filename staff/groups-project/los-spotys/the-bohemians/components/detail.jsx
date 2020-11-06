function Detail({ song: {id, song, releaseDate, preListening, image, artist, album, favourite}, onFavourite }) {


    return <section className="detail">
        {artist, song, releaseDate && <h2>{artist}, {song} ({releaseDate}) </h2>}
        {<div className = "button button__favourite"onClick={event => {
                event.stopPropagation()

                onFavourite(id)

            }}>{favourite ? '⭐': '✫'}</div>}
        {album && <p>{album}</p>}
        {image && <img src={image} />}
        {preListening ?  <audio src={preListening} controls></audio> : <h2>There is no pre listening</h2>}
    </section>
}