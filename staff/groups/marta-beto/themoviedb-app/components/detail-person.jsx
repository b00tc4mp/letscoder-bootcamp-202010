function DetailPerson ({person: {name, image, birthday, birthPlace, biography}}) {
    const pathLocation = 'https://image.tmdb.org/t/p/w500';
    return <section className="detail">
                {name && <h2 className="detail__title">{name}</h2>}
                {image && <img src={pathLocation + image} alt="" className="detail__img"/>}
                <div className="detail__preoverview">
                    {birthday && <p className="detail__date">{birthday}</p>}
                    {birthPlace && <p className="detail__vote">{birthPlace}</p>}
                </div>
                {biography && <p className="detail__overview">{biography}</p>}
            </section>   
}