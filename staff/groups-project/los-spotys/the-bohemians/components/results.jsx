function Results({ music, onTrack }) {
    return <ul className="results">
        {music.map(({ artist, id, image, preListening, song }) => <li className="results__track" key={id} onClick={() => onTrack(id)}>
            {artist && <p>{artist}</p>}
            {song && <p>{song}</p>}
            {preListening ? <a href= {preListening}><h2>Listen the song</h2></a> : <h2>no preListening</h2>}
            {image && <img src={image} />}
        </li>)}
    </ul>
}

