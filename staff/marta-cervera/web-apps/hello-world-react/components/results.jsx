function Results ({items, currency, onItem}) {
return <ul className="results">
      {items.map(({ id, title, url, preview, image, price }) => <li className="results__item" key={id} onClick={() => onItem(id)}>
        {url ? <a href={url}><h2>{title}</h2></a> : <h2>{title}</h2>}
        {preview && <p>{preview}</p>}
        {image && <img src={image} />}
        {price && <span>{price} {currency}</span>}
        {<button onClick={event => {
            event.stopPropagation()

            onLike(id)
        }}>{like ? '❤️' : '♡'} </button>}
        


    </li>)}


</ul>
    
}

//button que haga click para que salte un callback y y lo guarde como favo, luego en home hay que añador ese callback que es el like y es lo que se va a manejar, handleLike
//handel like es un metodo de la clase home y hay que desutructurarlo
// hay que hacer un toggle, de tal manera que se quite o que se ponga segun se clika( efectos de API se quita o se ponga del array dependiendo, en la API se quita ese ID
//
//