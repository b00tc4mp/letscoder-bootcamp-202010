function Detail({ song: {id, song, releaseDate, preListening, image, artist, album, favourite}, onFavourite }) {


    return <section className="detail">
        {artist, song, releaseDate && <h2>{artist}, {song} ({releaseDate}) </h2>}
        {<button onClick={event => {
                event.stopPropagation()

                onFavourite(id)

            }}>{favourite ? '⭐': '✫'}</button>}
        {album && <p>{album}</p>}
        {image && <img src={image} />}
        {preListening ?  <audio src={preListening} controls></audio> : <h2>There is no pre listening</h2>}
    </section>
}