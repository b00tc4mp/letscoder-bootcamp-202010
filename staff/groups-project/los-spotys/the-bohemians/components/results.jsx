function Results({ tracks, onTrack, onFavourite }) {
    return <ul className="results">
        {tracks.map(({ artist, id, image, song, favourite }) => <li className="results__track" key={id} onClick={() => onTrack(id)}>
            {artist && <p>{artist}</p>}
            {<button onClick={event => {
                event.stopPropagation()

                onFavourite(id)

            }}>{favourite ? '⭐': '✫'}</button>}
            {song && <p>{song}</p>}
            {image && <img src={image} />}
        </li>)}
    </ul>
}

