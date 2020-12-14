import './FindGames.sass'
//import logo from "../assets/img/logo.png"
const API_URL = process.env.REACT_APP_API_URL

function FindGames({ games, onDetailGame }) {

    const handleDetailGame = (id) => {

        onDetailGame(id)
    }

    return <div className="results">
        <ul className="results__ul">
            {games.map(({ id, name, description, gameconsole, budget }) =>
                <li key={id} className="results__li">
                    <p className="results__li__p">{name}</p>
                    <img className="results__li__img" src={`${API_URL}/games/${id}/images`} width="500px" onClick={() => handleDetailGame(id)} />
                    <p className="results__li__p">description: {description}</p>
                    <p className="results__p">gameconsole: {gameconsole}</p>
                    <p className="results__p">budget: {budget}</p>
                </li>)}
        </ul>
    </div>
}

export default FindGames
