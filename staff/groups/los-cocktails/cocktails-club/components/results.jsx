function Results({ items, onLike }) {
  return (
    <>
      <section className="results">
        <ul className="results__ul">
          {items.map(
            ({
              like,
              name,
              id,
              image,
              instructions,
              instructionsES,
              alcoholic,
              glass,
              ing1,
              ing2,
              ing3,
              ing4,
              ing5,
              ing6,
              ing7,
              m1,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
            }) => (
                <li className="results__li" key={id}>
                  <div>
                    {image && (
                      <a href={image}>
                        <img className="results__image" src={image} />
                      </a>
                    )}
                    {alcoholic && <p className="results__p">{alcoholic}</p>}
                    {glass && <p className="results__p">{glass}</p>}
                  </div>
                  <div className="results__post">
                    {name ? (
                      <h2>{name}</h2>
                    ) : (
                        <h2 className="results__h2">Drink Name</h2>
                      )}
                    {instructionsES ? (
                      <p>{instructionsES}</p>
                    ) : (
                        <p>{instructions}</p>
                      )}
                    {ing1 && (
                      <p className="results__p">
                        {ing1}: <span className=" negrita">{m1}</span>
                      </p>
                    )}
                    {ing2 && (
                      <p className="results__p">
                        {ing2}: <span className=" negrita">{m2}</span>
                      </p>
                    )}
                    {ing3 && (
                      <p className="results__p">
                        {ing3}: <span className=" negrita">{m3}</span>
                      </p>
                    )}
                    {ing4 && (
                      <p className="results__p">
                        {ing4}: <span className=" negrita">{m4}</span>
                      </p>
                    )}
                    {ing5 && (
                      <p className="results__p">
                        {ing5}: <span className=" negrita">{m5}</span>
                      </p>
                    )}
                    {ing6 && (
                      <p className="results__p">
                        {ing6}: <span className=" negrita">{m6}</span>
                      </p>
                    )}
                    {ing7 && (
                      <p className="results__p">
                        {ing7}: <span className=" negrita">{m7}</span>
                      </p>
                    )}
                    <button
                      className="results__like"
                      onClick={function (event) {
                        event.stopPropagation();
                        onLike(id);
                      }}
                    >
                      {like ? "🤎" : "🤍"}
                    </button>
                  </div>
                </li>
              )
          )}
        </ul>
      </section>
    </>
  );
}

/* ? si tiene name haz el h2 / : sino  */
