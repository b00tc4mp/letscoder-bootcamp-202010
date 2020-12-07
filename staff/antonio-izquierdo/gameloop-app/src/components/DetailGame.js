//import './Detailpet.sass'

function DetailGame({result: { id, name, description, gameconsole, budget } }){

    
    return <div className="result">
        <ul className="result__ul">
       
        <li key={id} className="result__li">
            <img className="result__img" src="protectora.jpg"/>
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
