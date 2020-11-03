function Results({ music, onTrack }) {
    return <ul className="results">
        {music.map(({ artist, id, image, song }) => <li className="results__track" key={id} onClick={() => onTrack(id)}>
            {artist && <p>{artist}</p>}
            {song && <p>{song}</p>}
            {image && <img src={image} />}
        </li>)}
    </ul>
}

