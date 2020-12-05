import React from 'react'
import './Hub.sass'

function Hub(fullname, onGoCreateoffer, offers) {
    let query;
    const [offers, setResults] = useState()

    const handlefindOffers = (titleoffer, offername, price) => {
        const { token } = sessionStorage
        try {

            findOffer(titleoffer, offername, price, (error, offers) => {
                if (error) return alert(error.message)

                if (offers)
                    setResults(offers)
            })

        } catch (error) {
            alert(error.message)
        }


    }


    return (
        <>
            <form className="search_form" onSubmit={(event) => event.preventDefault()}>
                <input
                    className="search__input"
                    name="query"
                    type="text"
                    placeholder="Search"
                    onHub={(event) => (query = event.target.value)}
                />

                <button
                    className="searchByName__button"
                    onClick={() => handlefindOffers(query, undefined, undefined)}
                >
                    texto
        </button>
                <button
                    className="searchRandom__button"
                    onClick={() => handlefindOffers(undefined, query, undefined)}
                >
                    descripción
        </button>
                <button
                    className="searchRandom__button"
                    onClick={() => handlefindOffers(undefined, undefined, query)}
                >
                    precio
        </button>
                <h3>Bienvenid@ {fullname}!</h3>
                <h3>¿Qué alimento quieres hoy? </h3>

                <div>
                    <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button>
                </div>
            </form>
            <ListOffersRetrieve offers={offers} />
            <SearchOffers />

        </>
    );
}

export default Hub