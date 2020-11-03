function Detail({ song: {song, releaseDate, preListening, image, artist, album} }) {
    console.log(song)

    //const _title = <p>{song} {`${releaseDate? `(${releaseDate})`: ''}`}</p>

    return <section className="detail">
        {song, releaseDate && <h2>{song} ({releaseDate}) </h2>}
        {artist && <p>{artist}</p>}
        {album && <p>{album}</p>}
        {image && <img src={image} />}
        {preListening && <audio src={preListening} controls></audio>}
    </section>
}