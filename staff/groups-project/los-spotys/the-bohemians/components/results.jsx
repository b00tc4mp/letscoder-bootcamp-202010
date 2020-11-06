function Results({ tracks, onTrack, onFavourite }) {
    return <ul className="results">
        {tracks.map(({ artist, id, image, song, favourite }) => <li className="results__track" key={id} onClick={() => onTrack(id)}>
            {artist && <p>{artist}</p>}
            {<div className = "button button__favourites" onClick={event => {
                event.stopPropagation()

                onFavourite(id)

            }}>{favourite ? '⭐': '✫'}</div>}
            {song && <p>{song}</p>}
            {image && <img src={image} />}
        </li>)}
    </ul>
}

