import './FindGames.sass'
//import logo from "../assets/img/logo.png"
const API_URL = process.env.REACT_APP_API_URL

function FindGames({ games, onRetrieveGame }) {

    const handleRetrieveGame = (id) => {

        onRetrieveGame(id)
    }

    return games ? <section className="u-p-h-20">
        <ul className="u-grid">
            {games.map(({ id, name, budget }) =>
                <li
                    className="u-grid__item">
                    <article key={id} className="card">
                        <header className="card-header">
                            <img
                                className="card-header__image"
                                src={`${API_URL}/games/${id}/images`}
                                height="120"
                                alt="Api"
                                onClick={() => handleRetrieveGame(id)}
                            />
                        </header>
                        <div className="card-body">
                            <h4 className="card-body__title">
                                {name}
                            </h4>
                            <p className="card-body__description"> {budget + ' ' + '$'}</p>
                        </div>
                    </article>
                </li>
            )}
        </ul>
    </section> : <> </>
}

export default FindGames
