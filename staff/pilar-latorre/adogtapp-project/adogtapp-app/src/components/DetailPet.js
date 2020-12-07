import './DetailPet.sass'

function DetailPet({result: {id, name, breed, species, color, description } }){

    
    return <div className="result">
        <ul className="result__ul">
       
        <li key={id} className="result__li">
            <img className="result__img" src="protectora.jpg"/>
            <div>
            <p className="result__p">{name}</p>
            <p className="result__p">breed: {breed}</p>
            <p className="result__p">species: {species}</p>
            <p className="result__p">color: {color}</p>
            <p className="result__p">description: {description}</p>
            </div>
        </li>

        </ul>
        </div>

}

export default DetailPet