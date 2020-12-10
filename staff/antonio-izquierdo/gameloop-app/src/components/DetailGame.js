//import './Detailpet.sass'
const API_URL = process.env.REACT_APP_API_URL
function DetailGame({result: { id, name, description, gameconsole, budget } }){

    
    return <div className="result">
        <ul className="result__ul">
       
        <li key={id} className="result__li">
            <img className="results__li__img" src={`${API_URL}/games/${id}/images`} width = "500px"/>
            <div>
            <p className="result__p">{name}</p>
            <p className="result__p">description: {description}</p>
            <p className="result__p">gameconsole: {gameconsole}</p>
            <p className="result__p">budget: {budget}</p>
            </div>
        </li>

        </ul>
        </div>

}

export default DetailGame
