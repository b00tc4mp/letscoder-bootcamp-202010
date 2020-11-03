function Results({items}){
return <>
<section className="results">
    <ul>
        {items.map(({name, id, image, instructions, instructionsES})=> <li className="results__li" key={id}>
            {image && <a href={image}><img style={{width: "350px"}} src={image} /></a>}
            { name ? <h2 style={{color: "white"}}>{name}</h2>:<h2>Drink Name</h2>}
            { instructionsES ? <p style={{color: "white"}}>{instructionsES}</p> : <p style={{color: "white"}}>{instructions}</p>}
        </li>)}
    </ul>

</section>

</>

}

 /* ? si tiene name haz el h2 / : sino  */