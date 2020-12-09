import './FindGames.sass'
//import logo from "../assets/img/logo.png"
const API_URL = process.env.REACT_APP_API_URL

function FindGames({ results, onDetailGame }) {
    
    const handleDetailGame = (id) => {
       
        onDetailGame(id)
    }    
 
    return <div className="results">
        <ul className="results__ul">
            {results.map(({ id, name, description, gameconsole, budget }) =>
                <li key={id} className="results__li">
                    <img className="results__li__img" src={`${API_URL}/games/${id}/images`} width = "500px" onClick={()=>handleDetailGame(id)}/>
                    <p className="results__p">{name}</p>
                    <p className="results__p">description: {description}</p>
                    <p className="results__p">gameconsole: {gameconsole}</p>
                    <p className="results__p">budget: {budget}</p>
                </li>)}
        </ul>
    </div>
}

export default FindGames
