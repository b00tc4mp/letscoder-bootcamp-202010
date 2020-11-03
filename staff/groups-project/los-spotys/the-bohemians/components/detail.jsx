function Detail({ song: {song, releaseDate, preListening, image, artist, album} }) {
    console.log(song)

    const _title = <h2>{song} {`${releaseDate? `(${releaseDate})`: ''}`}</h2>

    return <section className="detail">
        {preListening ? <audio src={preListening} controls></audio> : <h2>{_title}</h2>}
        {artist && <p>{artist}</p>}
        {album && <p>{album}</p>}
        {image && <img src={image} />}
    </section>
} 



