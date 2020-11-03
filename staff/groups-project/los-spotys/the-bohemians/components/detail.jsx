function Detail({ song: {song, releaseDate, preListening, image, artist, album} }) {
    console.log(song)

    //const _title = <p>{song} {`${releaseDate? `(${releaseDate})`: ''}`}</p>

    return <section className="detail">
        {artist, song, releaseDate && <h2>{artist}, {song} ({releaseDate}) </h2>}
        {album && <p>{album}</p>}
        {image && <img src={image} />}
        {preListening ?  <audio src={preListening} controls></audio> : <h2>There is no pre listening</h2>}
    </section>
}