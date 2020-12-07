import './FindGames.sass'
import logo from "../assets/img/logo.png"

function FindGames({ results, onDetailGame }) {

    const handleDetailGame = (id) => {
       
        onDetailGame(id)
    }    
 
    return <div className="results">
        <ul className="results__ul">
            {results.map(({ id, name, description, gameconsole, budget }) =>
                <li key={id} className="results__li">
                    <img className="results__li__logo" src={ logo } onClick={()=>handleDetailGame(id)}/>
                    <p className="results__p">{name}</p>
                    <p className="results__p">description: {description}</p>
                    <p className="results__p">gameconsole: {gameconsole}</p>
                    <p className="results__p">budget: {budget}</p>
                </li>)}
        </ul>
    </div>
}

export default FindGames
